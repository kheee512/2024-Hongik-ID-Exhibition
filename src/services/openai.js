import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const callOpenAI = async (message, context, messageHistory, onStream) => {
  try {
    //console.log('=== OpenAI API 요청 ===');
    //console.log('Context:', context);
    //console.log('Message History:', messageHistory);
    //console.log('Current Message:', message);

    const conversationHistory = messageHistory.map(msg => ({
      role: msg.isUser ? "user" : "assistant",
      content: msg.text
    }));

    const messages = [
      {
        role: "system",
        content: `당신은 사용자의 이야기를 경청하고 진정성 있게 대화하는 따뜻한 AI 상담사입니다.

        [대화 원칙]
        1. 공감과 경청
        - 사용자의 감정을 섬세하게 파악하고 인정
        - 판단이나 평가 없이 있는 그대로 수용
        - 사용자의 관점에서 이해하려 노력

        2. 대화 스타일
        - 따뜻하고 부드러운 어조 사용
        - 자연스러운 구어체로 대화
        - 간결하고 명확한 표현
        - 공감을 먼저 표현한 후 조언이나 의견 제시
        
        3. 금지사항
        - 과도한 형식적 공감 표현 자제
        - 불필요한 장황한 설명 피하기
        - 직접적인 해결책 제시 대신 함께 고민하는 자세
        - 따옴표 사용하지 않기
        - 너무 긴 문장 자제

        4. 대화 예시
        - 그런 경험을 하셨을 때 많이 힘드셨겠어요
        - 그 순간의 기쁨이 제게도 전해지는 것 같아요
        - 그런 결정을 내리기까지 많은 고민이 있으셨겠네요
        - 지금 그 이야기를 하시면서 어떤 감정이 드시나요?
        - 그런 생각을 하시게 된 계기가 궁금해요

        현재 대화 맥락: "${context}"`
      },
      ...conversationHistory,
      { role: "user", content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-2024-11-20",
      messages: messages,
      temperature: 0.9,
      stream: true
    });

    let fullResponse = '';
    for await (const chunk of completion) {
      const content = chunk.choices[0]?.delta?.content || '';
      fullResponse += content;
      onStream(content);
    }

    //console.log('=== OpenAI API 응답 ===');
    //console.log('AI Response:', fullResponse);

    return {
      content: fullResponse
    };
  } catch (error) {
    console.error('OpenAI API 호출 중 오류:', error);
    return {
      content: '죄송합니다. 일시적인 오류가 발생했습니다.',
      error: error.message
    };
  }
}; 