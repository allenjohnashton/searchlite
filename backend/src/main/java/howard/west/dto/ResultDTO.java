package howard.west.dto;

import lombok.Builder;
import lombok.Data;

/**
 * DTO's make json serialization easier
 * @Data generates getters and setters to reduce java boilerplate
 */
@Data
@Builder
public class ResultDTO
{
  private String term;
}
