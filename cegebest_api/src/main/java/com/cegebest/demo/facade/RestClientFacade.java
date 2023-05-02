package com.cegebest.demo.facade;

import static com.cegebest.demo.utils.Common.mapToQueryString;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Component
public class RestClientFacade {
    @Autowired
    private RestTemplate restTemplate;

    public <R> R get(String url, Map<String, String> queryObject, Class<R> responseType) {
        String fullUrl = url + mapToQueryString(queryObject);
        return restTemplate.getForEntity(fullUrl, responseType).getBody();
    }

    public <T, R> R post(String url, T payload, Class<R> responseType) {
        return restTemplate.postForEntity(url, payload, responseType).getBody();
    }
}
