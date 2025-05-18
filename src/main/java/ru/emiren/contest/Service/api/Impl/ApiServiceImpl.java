package ru.emiren.contest.Service.api.Impl;

import com.deepoove.poi.util.PoitlIOUtils;
import com.deepoove.poi.xwpf.NiceXWPFDocument;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ru.emiren.contest.DTO.Temporal.FileHolder;
import ru.emiren.contest.Service.Word.ContestService;
import ru.emiren.contest.Service.api.ApiService;

import java.io.*;
import java.text.DateFormat;
import java.util.*;

@Service
@Slf4j
public class ApiServiceImpl implements ApiService {

    private final DateFormat dateFormat;
    private final ContestService contestService;
    private ClassPathResource contestClassPathResource;
    private FileHolder fileHolder = new FileHolder();

    @Autowired
    ApiServiceImpl(
            @Qualifier("contestTemplateResource") ClassPathResource contestLoader,
            DateFormat dateFormat,
            ContestService contestService){

        this.dateFormat = dateFormat;
        this.contestClassPathResource = contestLoader;
        this.contestService = contestService;
    }

    @Override
    public ResponseEntity<String> handleContestFile(String fileId, Map<String, Object> data) {
        Map<String, String> headers = new HashMap<>();
        log.info("Received file upload with ID: {}", fileId);

        if (!fileHolder.containsDocument(fileId)) {
            try (InputStream is = contestClassPathResource.getInputStream();
                 ByteArrayOutputStream baos = new ByteArrayOutputStream()) {

                NiceXWPFDocument processedDocument = contestService.generateWordDocument(is, data);
                log.info("Processed File: {}", processedDocument.toString());

                log.info("Document generated successfully for file ID: {}", fileId);
                if (processedDocument != null) {
                    log.info("Processed document is not null");
                    processedDocument.write(baos);

                    byte[] docBytes = baos.toByteArray();
                    fileHolder.storeDocument(fileId, docBytes);

                    headers.put("status", "200");
                    headers.put("id", fileId);
                    PoitlIOUtils.closeQuietly(processedDocument);
                    log.info("Done processing file");
                    return ResponseEntity.status(HttpStatus.OK).body(headers.toString());
                } else {
                    log.warn("Processed document is null");
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(fileId);
                }
            } catch (IOException ex) {
                log.error("Error processing file upload: {}", ex.getMessage());
                headers.put("status", "500");
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(headers.toString());
            }
        } else {
            headers.put("status", "200");
            headers.put("id", fileId);
            return ResponseEntity.status(HttpStatus.OK).body(headers.toString());
        }
    }

    /**
     * On call returns a download process of a file
     *
     * @param id
     * @param response
     * @return a ResponseEntity with status
     */
    @Override
    public ResponseEntity<String> downloadFile(String id, HttpServletResponse response) {
        log.info("DownloadWordFile is activated with id: {}", id );
        Date date = new Date();
        if (fileHolder.containsDocument(id)) {
            byte[] document = fileHolder.getDocument(id);
            log.info(document.toString());

            response.setContentType("application/octet-stream");
            response.setHeader(HttpHeaders.CONTENT_DISPOSITION,
                    ContentDisposition.builder("attachment")
                            .filename("protocols-" + dateFormat.format(date) + ".docx")
                            .build().toString());
            try (OutputStream os = response.getOutputStream();
                 BufferedOutputStream bos = new BufferedOutputStream(os)
            ) {
                log.info("In OutputStream for {}", id);
                bos.write(document);
                log.info("Out OutputStream");
                return ResponseEntity.ok("200");
            } catch (IOException e) {
                log.warn(e.getMessage());
                response.setStatus(HttpStatus.BAD_REQUEST.value());
            } finally {
                try {
                    response.flushBuffer();
                } catch (IOException e) {
                    log.warn(e.getMessage());
                }
            }
        }
        return ResponseEntity.badRequest().build();
    }
}
