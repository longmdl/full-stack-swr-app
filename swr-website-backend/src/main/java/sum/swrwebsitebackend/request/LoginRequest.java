package sum.swrwebsitebackend.request;

// 1. A simple DTO to bind the JSON body
public record LoginRequest(String username, String password) { }
