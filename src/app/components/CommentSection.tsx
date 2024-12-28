'use client'

import { useState, useEffect } from 'react'

interface Comment {
  id: string
  author: string
  content: string
  createdAt: string
}

const STORAGE_KEY = 'blogComments'

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState({ author: '', content: '' })
  const [editingId, setEditingId] = useState<string | null>(null)

  useEffect(() => {
    const storedComments = localStorage.getItem(STORAGE_KEY)
    if (storedComments) {
      try {
        const parsedComments = JSON.parse(storedComments)
        setComments(parsedComments)
      } catch (error) {
        console.error('Error parsing stored comments:', error)
      }
    }
  }, [])

  const saveComments = (updatedComments: Comment[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedComments))
    } catch (error) {
      console.error('Error saving comments:', error)
    }
  }

  const addComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.author.trim() && newComment.content.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        ...newComment,
        createdAt: new Date().toISOString()
      }
      const updatedComments = [...comments, comment]
      setComments(updatedComments)
      saveComments(updatedComments)
      setNewComment({ author: '', content: '' })
    }
  }

  const startEditing = (id: string) => {
    setEditingId(id)
    const commentToEdit = comments.find(comment => comment.id === id)
    if (commentToEdit) {
      setNewComment({ author: commentToEdit.author, content: commentToEdit.content })
    }
  }

  const saveEdit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingId) {
      const updatedComments = comments.map(comment => 
        comment.id === editingId 
          ? { ...comment, author: newComment.author, content: newComment.content }
          : comment
      )
      setComments(updatedComments)
      saveComments(updatedComments)
      setEditingId(null)
      setNewComment({ author: '', content: '' })
    }
  }

  const deleteComment = (id: string) => {
    const updatedComments = comments.filter(comment => comment.id !== id)
    setComments(updatedComments)
    saveComments(updatedComments)
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form onSubmit={editingId ? saveEdit : addComment} className="mb-6">
        <input
          type="text"
          placeholder="Your name"
          value={newComment.author}
          onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
        />
        <textarea
          placeholder="Your comment"
          value={newComment.content}
          onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {editingId ? 'Save Edit' : 'Add Comment'}
        </button>
      </form>
      <div className="space-y-4">
        {comments.map(comment => (
          <div key={comment.id} className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">{comment.author}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(comment.createdAt).toLocaleString()}
                </p>
              </div>
              <div>
                <button
                  onClick={() => startEditing(comment.id)}
                  className="bg-green-400 text-white px-6 py-1 rounded-md text-md mr-2 hover:bg-green-600 tracking-wider"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteComment(comment.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded-md text-md hover:bg-red-600 tracking-wider"
                >
                  Delete
                </button>
              </div>
            </div>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

