package ru.emiren.contest.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.core.io.ClassPathResource;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

@Configuration
public class AppConfig {

    private Environment env;

    public AppConfig(Environment env) {
        this.env = env;
    }

    @Bean
    public DateFormat dateFormat() {
        return new SimpleDateFormat("dd/MM/yyyy-HH:mm:ss");
    }

    @Bean("contestTemplateResource")
    public ClassPathResource classPathResource() { return new ClassPathResource("contest_template.docx"); }

}
