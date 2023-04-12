package com.cegebest.demo.exception;

import java.io.Serial;

public class ApiException extends RuntimeException{
    @Serial
    private static final long serialVersionUID = 1L;

    public ApiException(String message) {
        super(message);
    }
}