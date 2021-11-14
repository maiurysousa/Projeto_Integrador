package br.org.generation.ecommerce.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.org.generation.ecommerce.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository <Produto, Long> {
	
	public List <Produto> findAllByNomeContainingIgnoreCase(String nome);
	
	public List <Produto> findByNomeAndTamanho(String nome, String tamaho);
	
	public List <Produto> findAllByNomeOrTamanho(String nome, String tamanho);
	
	public List <Produto> findAllByNomeAndCor(String nome, String cor);
	
	public List <Produto> findAllByNomeOrCor(String nome, String cor);

	public List<Produto> findByPrecoBetween(BigDecimal inicio, BigDecimal fim);
	
	
	
}
