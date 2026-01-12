export interface CreateQuizDTO {
  title: string;
  description: string;
  categoryId: number;
}

export interface UpdateQuizDTO {
  title?: string;
  description?: string;
  isActive?: boolean;
}
