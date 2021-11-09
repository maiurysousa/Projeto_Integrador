package br.org.generation.ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.org.generation.ecommerce.model.Categoria;

public interface CategoriaRepository extends JpaRepository <Categoria, Long> {
	
	public List <Categoria> findAllByCategoriaContainingIgnoreCase(String categoria);
	
	public List <Categoria> findAllByDescricaoContainingIgnoreCase(String descricao);
	
	public List <Categoria> findAllByPalavraChaveContainingIgnoreCase(String palavraChave);

}
