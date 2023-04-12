package com.cegebest.demo.dto;

import com.cegebest.demo.enums.MessageStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MessageResponseDto {
    private MessageStatus status;
    private String body;
}
