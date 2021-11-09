package br.org.generation.ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.generation.ecommerce.model.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository <Categoria, Long > {
	
	// PESQUISA POR CATEGORIA
	public List<Categoria>findAllByCategoriaContainingIgnoreCase(String categoria);
	
	// PESQUISA POR DESCRIÇÃO
	public List<Categoria>findAllByDescricaoContainingIgnoreCase(String descricao);
	
	// PESQUISA POR PALAVRA CHAVE
	public List<Categoria>findAllByPalavraChaveContainingIgnoreCase(String palavraChave);

}