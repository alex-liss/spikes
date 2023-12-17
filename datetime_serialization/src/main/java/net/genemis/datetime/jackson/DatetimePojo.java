package net.genemis.datetime.jackson;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.ZonedDateTime;

/**
 * Sample POJO with ZonedDateTime field.
 */
@Data
@NoArgsConstructor
public class DatetimePojo {

    private ZonedDateTime datetime;

}
