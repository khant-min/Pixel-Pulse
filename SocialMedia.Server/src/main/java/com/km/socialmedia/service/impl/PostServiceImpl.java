package com.km.socialmedia.service.impl;

import com.km.socialmedia.dao.PostDao;
import com.km.socialmedia.model.Post;
import com.km.socialmedia.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostServiceImpl implements PostService {
    @Autowired
    PostDao postDao;

    @Override
    public ResponseEntity<List<Post>> getAllPosts() {
        try {
            return new ResponseEntity<List<Post>>(postDao.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<String> createPost(Post post) {
        postDao.save(post);
        return new ResponseEntity<>("Post created successfully.", HttpStatus.OK);
    }
}
