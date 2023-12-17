package net.genemis.datetime.jackson;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * Sample application to demonstrate serialization and deserialization of ZonedDateTime.
 */
 public class Main {

    public static void main(String[] args) throws Exception {

        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());
        mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
        mapper.enable(SerializationFeature.WRITE_DATES_WITH_ZONE_ID);
        mapper.disable(DeserializationFeature.ADJUST_DATES_TO_CONTEXT_TIME_ZONE);
        ObjectWriter writer = mapper.writerWithDefaultPrettyPrinter();

        List<DatetimePojo> original = getDatetimes();

        String serialized = writer.writeValueAsString(original);
        System.out.println("Serialized: " + serialized);

        ObjectReader reader = mapper.reader();
        JsonParser parser = new JsonFactory().createParser(serialized);
        List<DatetimePojo> deserialized = reader.readValue(parser, new TypeReference<>(){});
        System.out.println("Deserialized: " + deserialized);

        DatetimePojo originalPojo = original.get(0);
        System.out.println("Original pojo: " + originalPojo);
        DatetimePojo deserializedPojo = deserialized.get(0);
        System.out.println("Deserialized pojo: " + deserializedPojo);

        System.out.println("Equal: " + originalPojo.equals(deserializedPojo));
    }

    private static List<DatetimePojo> getDatetimes() {
        List<DatetimePojo> pojoList = new ArrayList<>();
        DatetimePojo pojo = new DatetimePojo();
        pojo.setDatetime(ZonedDateTime.now());
        pojoList.add(pojo);
        return pojoList;
    }

}
