package com.zachary.blog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zachary.blog.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long>{
    List<Post> findAll();
    
    List<Post> findByAuthor(String author);
}