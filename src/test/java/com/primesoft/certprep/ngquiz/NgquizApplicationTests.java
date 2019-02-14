package com.primesoft.certprep.ngquiz;

import com.primesoft.certprep.ngquiz.reposotories.QuestionRepository;
import com.primesoft.certprep.ngquiz.reposotories.QuizRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Collection;
import java.util.Collections;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = NgquizApplication.class)
@WebMvcTest
public class NgquizApplicationTests {

	@Autowired
	MockMvc mockMvc;

	@MockBean
	QuestionRepository questionRepository;

	@Test
	public void contextLoads() throws Exception {

		Mockito.when(questionRepository.findAll()).thenReturn(
				Collections.emptyList()
		);

		MvcResult mvcResult = mockMvc.perform(
				MockMvcRequestBuilders.get("/api/quiz/questions").accept(MediaType.APPLICATION_JSON)
		).andReturn();

		System.out.println(mvcResult.getResponse());
		Mockito.verify(questionRepository).findAll();
	}

}

