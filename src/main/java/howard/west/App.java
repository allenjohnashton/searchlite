package howard.west;

import com.google.gson.Gson;
import howard.west.dto.ResultDTO;
import lombok.extern.slf4j.Slf4j;

import static spark.Spark.get;
import static spark.Spark.port;

@Slf4j
public class App {



  public static void main(String[] args) {
    //GSON is used to map to json.
    Gson gson = new Gson();

    // by default this is 4567 in order to prevent collisions with
    // other things that may be running on the machine.  We are running in a docker container
    // so that is not an issue
    port(8080);

    //the route callback is a lambda function
    get("/", (req, res) -> {
      log.info("Loading the index");
      return "Welcome to Howard West!";
    });
    get(
      "/search",
      "application/json",
      (req, res) -> ResultDTO.builder().term(req.queryMap("term").value()),
      gson::toJson); // <- this is called a method reference
  }
}
