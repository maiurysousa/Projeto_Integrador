package br.org.generation.ecommerce.controller;

import java.math.BigDecimal;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.org.generation.ecommerce.model.Produto;
import br.org.generation.ecommerce.repository.ProdutoRepository;

@RestController
@RequestMapping("/produtos")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	@GetMapping //retorna a lista com todos os recursos que estão no endereço produtos
	public ResponseEntity<List<Produto>> getAll(){ 
		return ResponseEntity.ok(produtoRepository.findAll());
	}
	
	@GetMapping("/{id}") //retorna um recurso específico indentificado pelo id
	public ResponseEntity<Produto> getById(@PathVariable long id){
		return produtoRepository.findById(id)
			.map(resp -> ResponseEntity.ok(resp))
			.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/nome/{nome}")//retorna um recurso específico indentificado pelo nome
	public ResponseEntity<List<Produto>> getByTitulo(@PathVariable String nome){
		return ResponseEntity.ok(produtoRepository.findAllByNomeContainingIgnoreCase(nome));
	}
	
	@PostMapping //insere novo recurso
	public ResponseEntity<Produto> postProduto(@RequestBody Produto produto){ 
		return ResponseEntity.status(HttpStatus.CREATED).body(produtoRepository.save(produto));
	}
	
	@PutMapping // atualiza um recurso
	public ResponseEntity<Produto> putProduto(@Valid @RequestBody Produto produto) { 
		return produtoRepository.findById(produto.getId())
				.map(resposta -> ResponseEntity.ok(produtoRepository.save(produto))) // joga dentro do ok a resposta do método
				.orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping("/{id}")  //deleta um recurso pelo id
	public ResponseEntity<?> deleteProduto(@PathVariable long id) { //informa qual o id do produto que quero apagar
		return produtoRepository.findById(id)
				.map(resposta -> {
					produtoRepository.deleteById(id);
					return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
				})
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/nome/{nome}/etamanho/{tamanho}")
	public ResponseEntity<List<Produto>> getByNomeETamanho(@PathVariable String nome, @PathVariable String tamanho){
		return ResponseEntity.ok(produtoRepository.findByNomeAndTamanho(nome, tamanho));
	}
	
	@GetMapping("/nome/{nome}/outamanho/{tamanho}")
	public ResponseEntity<List<Produto>> getByNomeOuTamanho(@PathVariable String nome, @PathVariable String tamanho){
		return ResponseEntity.ok(produtoRepository.findByNomeAndTamanho(nome, tamanho));
	}
		
	@GetMapping("/nome/{nome}/ecor/{cor}")
	public ResponseEntity<List<Produto>> getByNomeEECor(@PathVariable String nome, @PathVariable String cor){
		return ResponseEntity.ok(produtoRepository.findAllByNomeAndCor(nome, cor));
	}
	
	@GetMapping("/nome/{nome}/oucor/{cor}")
	public ResponseEntity<List<Produto>> getByNomeOuCor(@PathVariable String nome, @PathVariable String cor){
		return ResponseEntity.ok(produtoRepository.findAllByNomeOrCor(nome, cor));
	}
				
	@GetMapping("/preco_inicial/{inicio}/preco_final/{fim}") // Consulta por preço entre dois valores (Between)
    public ResponseEntity<List<Produto>> getByPrecoEntre(@PathVariable BigDecimal inicio, @PathVariable BigDecimal fim){
        return ResponseEntity.ok(produtoRepository.findByPrecoBetween(inicio, fim));
	}
	
	
	

}
