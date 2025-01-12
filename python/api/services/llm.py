from together import Together


class LlmSearch:
    def __init__(self):
        self.client = Together(
            api_key="e0c0963fced890074b0d8d7242d5c08dd37df2e346d7c179e25b7b9471f8d883"
        )

    def query_llm(self, user_query):
        response = self.client.chat.completions.create(
            model="deepseek-ai/DeepSeek-V3",
            messages=[{"role": "user", "content": user_query}],
        )
        return response.choices[0].message.content
