/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import { PostCard } from "../index";
import { postCardPropsMock } from "../../../mock/PostCardMock";

const props = postCardPropsMock;

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
       render(<PostCard {...props}/>);

       expect(screen.getByRole('img','h2',{ name: /title/i }))
       .toBeInTheDocument();
       expect(screen.getByRole('img','heading', { name: 'title 1'}))
       .toBeInTheDocument()
       expect(screen.getByRole('img','heading',{ name: 'boby 1'}))
       .toBeInTheDocument()
    });

    it('should match snapshot', () => {
       const {container} = render(<PostCard {...props}/>);
       expect(container.firstChild).toMatchSnapshot();
    })
});