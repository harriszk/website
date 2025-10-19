package com.zachary.blog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.zachary.blog.model.Post;
import com.zachary.blog.service.PostService;

@CrossOrigin(originPatterns = "*")
@RestController
public class BlogController {
    private PostService postService;

    @Autowired
    public BlogController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/posts")
    public List<Post> getAllPosts() {
        return this.postService.getAllPosts();
    }

    @PostMapping("/posts" )
    public Post createPost(@RequestBody Post post) {
        return this.postService.createPost(post);
    }

    @DeleteMapping("/posts")
    public void deletePost(@RequestParam Long id) {
        this.postService.deletePost(id);
    }
}
