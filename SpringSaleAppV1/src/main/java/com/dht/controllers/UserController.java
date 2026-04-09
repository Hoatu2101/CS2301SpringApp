package com.dht.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author admin
 */
@Controller
@RequestMapping("/admin")
public class UserController {
    @GetMapping("/login")
    public String loginView() {
        return "login";
    }
}