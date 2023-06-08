package com.wenzins.UserManagementWeb.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class RequestController {
	@RequestMapping(value= {"/terms"}, method = {RequestMethod.GET} )
	public String terms(HttpServletRequest request,HttpServletResponse response){
		return "terms";
	}

	@RequestMapping(value= {"/","/cLogin"}, method = {RequestMethod.GET} )
	public String login(HttpServletRequest request,HttpServletResponse response){
		return "clientLogin";
	}
	@RequestMapping(value= {"/login"}, method = {RequestMethod.GET} )
	public String wriztoLogin(HttpServletRequest request,HttpServletResponse response){
		return "wriztoLogin";
	}

	@RequestMapping(value= {"/dashboard"}, method = {RequestMethod.GET} )
	public String dashboard(HttpServletRequest request,HttpServletResponse response){
		return "dashboard";
	}

	@RequestMapping(value= {"/clients"}, method = {RequestMethod.GET} )
	public String clients(HttpServletRequest request,HttpServletResponse response){
		return "manageClients";
	}

	@RequestMapping(value= {"/distributors"}, method = {RequestMethod.GET} )
	public String distributors(HttpServletRequest request,HttpServletResponse response){
		return "manageDistributors";
	}

	@RequestMapping(value= {"/products"}, method = {RequestMethod.GET} )
	public String manageProducts(HttpServletRequest request,HttpServletResponse response){
		return "manageProducts";
	}

	@RequestMapping(value= {"/users"}, method = {RequestMethod.GET} )
	public String manageUsers(HttpServletRequest request,HttpServletResponse response){
		return "manageUsers";
	}

	@RequestMapping(value= {"/consumers"}, method = {RequestMethod.GET} )
	public String manageConsumers(HttpServletRequest request,HttpServletResponse response){
		return "manageConsumers";
	}

	@RequestMapping(value= {"/packages"}, method = {RequestMethod.GET} )
	public String managePackages(HttpServletRequest request,HttpServletResponse response){
		return "managePackages";
	}

	@RequestMapping(value= {"/logs"}, method = {RequestMethod.GET} )
	public String manageLogs(HttpServletRequest request,HttpServletResponse response){
		return "manageLogs";
	}

	@RequestMapping(value= {"/tickets"}, method = {RequestMethod.GET} )
	public String manageTickets(HttpServletRequest request,HttpServletResponse response){
		return "validation";
	}
	@RequestMapping(value= {"/consultation"}, method = {RequestMethod.GET} )
	public String manageConsultation(HttpServletRequest request,HttpServletResponse response){
		return "manageConsultation";
	}

}
