package br.org.generation.ecommerce.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.swagger.annotations.ApiModelProperty;

@Entity //Entity informa que essa classe irá gerar uma tabela
@Table(name = "tb_usuario") //Criar tabela e o nome - equivalente ao create table
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //Autoincremento
	private long id;
	
	@NotBlank(message = "O atributo nome completo é obrigatório!")
	@Size(min = 5, max = 255, message = "O atributo nome completo deve conter no mínimo 5 e no máximo 255 caracteres.")
	private String nomeCompleto; // nome do usuario varchar
	
	@ApiModelProperty(example = "email@email.com.br")
	@Email(message = "O atributo Usuário deve ser um email válido!")
	@NotBlank(message = "O atributo usuario é obrigatório!")
	@Size(min = 5, max = 255, message = "O atributo usuario deve conter no mínimo 5 e no máximo 255 caracteres.")
	private String usuario; // email varchar
	
	@NotBlank(message = "O atributo senha é obrigatório!")
	@Size(min = 6, max = 255, message = "O atributo senha deve conter no mínimo 6 e no máximo 255 caracteres.")
	private String senha; // senha varchar
	
	@Size(min = 5, max = 500, message = "O atributo descrição deve conter no mínimo 5 e no máximo 500 caracteres.")
	private String descricao; // descrição do usuário varchar
	
	@OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("usuario")
	private List<Produto> produto;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public List<Produto> getProduto() {
		return produto;
	}

	public void setProduto(List<Produto> produto) {
		this.produto = produto;
	}
	
	
	

}
