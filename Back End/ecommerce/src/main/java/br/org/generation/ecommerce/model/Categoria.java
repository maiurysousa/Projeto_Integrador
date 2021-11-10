package br.org.generation.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity //Entity informa que essa classe irá gerar uma tabela
@Table(name = "tb_categoria") //Criar tabela e o nome- equivalente ao create table
public class Categoria {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //Autoincremento
	private long id;
	
	@NotNull(message = "O atributo categoria é obrigatório!")
	@Size(min = 5, max = 255, message = "O atributo categoria deve conter no mínimo 5 e no máximo 255 caracteres.")
	private String categoria; //equivalente ao titulo varchar
	
	@NotNull(message = "O atributo descricao é obrigatório!")
	@Size(min = 5, max = 255, message = "O atributo descricao deve conter no mínimo 5 e no máximo 255 caracteres.")
	private String descricao; //equivalente ao titulo varchar
	
	@Column(name = "palavra_chave")
	private String palavraChave; //equivalente ao titulo varchar
	
	/*@OneToMany
	@JsonIgnoreProperties("categoria")
	private Produto produto;
	*/
	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getPalavra_chave() {
		return palavraChave;
	}

	public void setPalavra_chave(String palavraChave) {
		this.palavraChave = palavraChave;
	}
	
	
	

}