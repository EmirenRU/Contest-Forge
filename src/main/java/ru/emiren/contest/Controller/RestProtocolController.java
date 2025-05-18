package ru.emiren.contest.Controller;

import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.emiren.contest.Service.api.ApiService;

import java.util.Map;

@RestController
@RequestMapping("/api/protocol")
@Slf4j
public class RestProtocolController {

    private final ApiService apiService;

    public RestProtocolController(ApiService apiService) {
        this.apiService = apiService;
    }

    /**
     * Download the file from the server
     * @param id hash ID of a file
     * @param response Client's Response Servlet
     * @return a ResponseEntity with a status
     */
    @GetMapping("/download_file/{id}")
    public ResponseEntity<String> downloadFile(@PathVariable("id") String id, HttpServletResponse response) {
        return apiService.downloadFile(id, response);
    }

    @PostMapping("/upload_contest_file")
    public ResponseEntity<String> uploadContestFile(@RequestBody Map<String, Object> data) {
        log.info("In uploadContestFile with id: {}", (String) data.get("id"));
        return apiService.handleContestFile((String) data.get("id"), (Map<String, Object>) data.get("data"));
    }
}
