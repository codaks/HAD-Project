package com.hadproject.healthcareapp.qans;
import com.hadproject.healthcareapp.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.Optional;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class QansService {
    private final QuestionRepository questionRepository;
    private final AnswersRepository answersRepository;
    private final UserRepository userRepository;

    public String postQuestion(QuestionRequest request){
        var user = userRepository.findById(request.getUid()).orElseThrow(() -> new RuntimeException("User not found"));

        var question = Question.builder()
                .u_id(user)
                .QuestionText(request.getQuestion_text())
                .tags(request.getTags())
                .date(String.valueOf(new Date()))
                .flag(request.getFlag())
                .build();

          try{
              questionRepository.save(question);
              return "Question posted successfully!";
          } catch (Exception e) {
              System.out.println(e+"");
              return "Failed to post question";
          }
    }

    public String postAnswer(AnsRequest ansrequest){
        var user = userRepository.findById(ansrequest.getUid()).orElseThrow(() -> new RuntimeException("User not found"));

        var question = questionRepository.findById( ansrequest.getQ_id()).orElseThrow(() -> new RuntimeException("Question not found"));

        var answers = Answers.builder()
                .q_id( question)
                .u_id(user)
                .answers_text(ansrequest.getAnswers_text())
                .date(String.valueOf(new Date()))
                .flag(ansrequest.getFlag())
                .build();

        try{
            answersRepository.save(answers);
            return "Answer posted successfully!";
        } catch (Exception e) {
            System.out.println(e+"");
            return "Failed to post answer";
        }
    }

    public String flagAnswer(Answers flagAns){
        Optional<Answers> answer_details = answersRepository.findById(flagAns.getId());
        if(answer_details.isPresent()){
            Answers ansToUpdate = answer_details.get();

            ansToUpdate.setFlag(flagAns.getFlag());
            answersRepository.save(ansToUpdate);
        }
    }


}
