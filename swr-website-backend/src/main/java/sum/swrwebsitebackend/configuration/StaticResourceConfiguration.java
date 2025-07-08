package sum.swrwebsitebackend.configuration;

// --- StaticResourceConfiguration.java (To serve uploaded images) ---
// NO CHANGES NEEDED HERE.
// package com.saigonunited.motorsports.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import sum.swrwebsitebackend.controller.RaceEventController;

@Configuration
public class StaticResourceConfiguration implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String uploadDir = RaceEventController.UPLOAD_DIRECTORY;
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:" + uploadDir + "/");
    }
}