import { fireEvent, render, screen } from '@testing-library/react';
import Post from '../index';

describe('Post Component', () => {
    it('Deve renderizar o componente corretamente.', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários corretamente.', () => {
        render(<Post />);

        const textarea = screen.getByTestId('comment-textarea');
        const button = screen.getByTestId('comment-button');

        
        fireEvent.change(textarea, { target: { value: 'Primeiro comentario' } });
        fireEvent.click(button);

        
        fireEvent.change(textarea, { target: { value: 'Segundo comentario' } });
        fireEvent.click(button);

        
        expect(screen.getByTestId('comment-0')).toHaveTextContent('Primeiro comentario');
        expect(screen.getByTestId('comment-1')).toHaveTextContent('Segundo comentario');
    });
});