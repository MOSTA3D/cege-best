package com.cegebest.demo.utils;

import java.lang.reflect.Field;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Map;

public class Common {
    public static String objectToQueryString(Object obj) {
        if (obj == null) return "";
        StringBuilder queryBuilder = new StringBuilder();
        Class<?> objClass = obj.getClass();
        Field[] fields = objClass.getDeclaredFields();
        for (Field field : fields) {
            if (!field.isAccessible()) continue;
//            field.setAccessible(true);
            Object fieldValue = null;

            try {
                fieldValue = field.get(obj);
            } catch (Exception e) {
                e.printStackTrace();
            }

            if (fieldValue != null) {
                String fieldName = field.getName();
                String fieldValueString = fieldValue.toString();
                queryBuilder.append(URLEncoder.encode(fieldName, StandardCharsets.UTF_8));
                queryBuilder.append("=");
                queryBuilder.append(URLEncoder.encode(fieldValueString, StandardCharsets.UTF_8));
                queryBuilder.append("&");
            }
        }
        String queryString = queryBuilder.toString();
        if (queryString.endsWith("&")) {
            queryString = queryString.substring(0, queryString.length() - 1);
        }
        return queryString;
    }

    public static String mapToQueryString(Map<String, String> map) {
        if (map == null) return "";
        StringBuilder sb = new StringBuilder();
        boolean first = true;

        for (Map.Entry<String, String> entry : map.entrySet()) {

            if (first) {
                first = false;
            } else {
                sb.append("&");
            }

            try {
                sb.append(URLEncoder.encode(entry.getKey(), "UTF-8"));
                sb.append("=");
                sb.append(URLEncoder.encode(entry.getValue(), "UTF-8"));
            } catch (Exception ex) {
                // handle exception
            }
        }

        return sb.toString();
    }

    public static String getFullUrl(String url, String path, Map<String, String> queryMap) {
        return url + "/" + path + "?" + mapToQueryString(queryMap);
    }

}
