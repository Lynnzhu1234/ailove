import React, { useState } from 'react'

function InputForm() {
  const [inputText, setInputText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // 保存输入的内容
    localStorage.setItem('userInput', inputText)
    // 跳转到AI分析页面
    window.location.href = '/analysis' // 替换成你的AI分析页面路径
  }

  return (
    <div className="input-container">
      <h2>请输入内容</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="请在这里输入你想要分析的内容..."
          rows="6"
          style={{ width: '100%', maxWidth: '500px' }}
        />
        <br />
        <button type="submit">提交分析</button>
      </form>
    </div>
  )
}

export default InputForm
