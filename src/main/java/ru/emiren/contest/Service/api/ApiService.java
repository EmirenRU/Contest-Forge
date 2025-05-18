package ru.emiren.contest.Service.api;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.Map;

public interface ApiService {

    ResponseEntity<String> downloadFile(String id, HttpServletResponse response);
    ResponseEntity<String> handleContestFile(String fileId, Map<String, Object> data);
}
