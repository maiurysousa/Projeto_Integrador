package br.org.generation.ecommerce.configuration;

import  java.util.ArrayList;
import  java.util.List;

import  org.springframework.context.annotation.Bean;
import  org.springframework.context.annotation.Configuration;
import  org.springframework.http.HttpMethod;

import  springfox.documentation.builders.ApiInfoBuilder;
import  springfox.documentation.builders.PathSelectors;
import  springfox.documentation.builders.RequestHandlerSelectors;
import  springfox.documentation.builders.ResponseBuilder;
import  springfox.documentation.service.ApiInfo;
import  springfox.documentation.service.Contact;
import  springfox.documentation.service.Response;
import  springfox.documentation.spi.DocumentationType;
import  springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SwaggerConfig {
	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
		.select()
		.apis(RequestHandlerSelectors
		.basePackage("br.org.generation.ecommerce.controller"))
		.paths(PathSelectors.any())
		.build()
		.apiInfo(metadata())
		.useDefaultResponseMessages(false)
		.globalResponses(HttpMethod.GET, responseMessage())
		.globalResponses(HttpMethod.POST, responseMessage())
		.globalResponses(HttpMethod.PUT, responseMessage())
		.globalResponses(HttpMethod.DELETE, responseMessage());
	}

	public static ApiInfo metadata() {

		return new ApiInfoBuilder()
			.title("Dresscode")
			.description("Dresscode é um marketplace focado em slow fashion que incentiva a mudança no comportamento de compra e estilo de vida dos consumidores a partir do fomento de marcas independentes e brechós que promovam o consumo sustentável de artigos de vestuário.")
			.version("1.0.0")
			.license("Apache License Version 2.0")
			.licenseUrl("https://github.com/maiurysousa/Projeto_Integrador")
			.contact(contact())
			.build();
	}

	private static Contact contact() {

		return new Contact("Dresscode", 
			"https://github.com/maiurysousa/Projeto_Integrador", 
			"dresscodemarketplace@gmail.com");

	}

	private static List<Response> responseMessage() {

		return new ArrayList<Response>() {

			private static final long serialVersionUID = 1L;

			{
				add(new ResponseBuilder().code("200").description("Sucesso!").build());
				add(new ResponseBuilder().code("201").description("Criado!").build());
				add(new ResponseBuilder().code("400").description("Erro na requisição!").build());
				add(new ResponseBuilder().code("401").description("Não Autorizado!").build());
				add(new ResponseBuilder().code("403").description("Proibido!").build());
				add(new ResponseBuilder().code("404").description("Não Encontrado!").build());
				add(new ResponseBuilder().code("500").description("Erro!").build());
			}
		};

	}
}