import styled from "styled-components";
import { Route, Switch, } from "react-router";

import Post, { Blank, Home, FourOhFour, } from "./post";
import Sidebar from "./Sidebar";

const PostsStyled = styled.div`
    background-color: ${R.path(["theme", "white",])};
    flex-direction: row;
`;

export default () => (
   <PostsStyled>

        <Route path = "/post" component = { Sidebar } />

        <Switch>
            <Route path = "/post/:postSlug" component = { Post } />
            <Route path = "/post/" component = { Blank } />
            <Route path = "/" exact component = { Home } />
            <Route component = { FourOhFour } />
        </Switch>

    </PostsStyled>
);
