package com.manish;

import org.springframework.web.bind.annotation.*;
import java.util.concurrent.TimeUnit;

@RestController
public class CrankyService {

    private static final int DEFAULT_LATENCY_MILLISECONDS = 2000;


    /**
    Responds with artificially induced latency
     */
    @ResponseBody
    @RequestMapping(method = {RequestMethod.GET}, value = {"/multiply/{latency}/{a}/{b}"})
    public String multiple(@PathVariable("latency") Long latency,
                                             @PathVariable("a") Long a,
                                             @PathVariable("b") Long b) throws Exception {

        TimeUnit.MILLISECONDS.sleep(latency != null ? latency : DEFAULT_LATENCY_MILLISECONDS);

        return a*b+"";
    }
}
