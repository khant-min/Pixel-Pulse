package com.km.socialmedia.controller;

import com.km.socialmedia.model.Post;
import com.km.socialmedia.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/posts")
public class PostController {
    @Autowired
    PostService postService;

    @GetMapping
    public ResponseEntity<List<Post>> getAllPosts() {
        return postService.getAllPosts();
    }

    @PostMapping
    public ResponseEntity<String> createPost(@RequestBody Post post) {
        return postService.createPost(post);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updatePost(@PathVariable("id") Long id,  @RequestBody Post post) {
        return postService.updatePost(id, post);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deletePost(@PathVariable("id") Long id) {
        return postService.deletePost(id);
    }
}
