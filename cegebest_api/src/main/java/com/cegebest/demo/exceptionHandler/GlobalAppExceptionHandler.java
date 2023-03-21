package com.cegebest.demo.exceptionHandler;

import com.cegebest.demo.dto.MessageResponseDto;
import com.cegebest.demo.dto.MessageStatus;
import com.cegebest.demo.exception.ApiException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalAppExceptionHandler extends ResponseEntityExceptionHandler {
    private final MessageResponseDto SOMETHING_WENT_WRONG = new MessageResponseDto(MessageStatus.Error, "Something went wrong");

    @ExceptionHandler(value = ApiException.class)
    public ResponseEntity<MessageResponseDto> handleApiException(ApiException e, WebRequest req) {
        return new ResponseEntity<>(new MessageResponseDto(MessageStatus.Error, e.getLocalizedMessage()), HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<MessageResponseDto> handleAppExceptionsDefault(Exception e, WebRequest req) {
        return new ResponseEntity<>(SOMETHING_WENT_WRONG, HttpStatus.FORBIDDEN);
    }
}
