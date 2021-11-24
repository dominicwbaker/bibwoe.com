import styled from '@emotion/styled';

const MIN_CONTENT_WIDTH = 700;

const MIN_SIDEBAR_WIDTH = 250;
const SIDEBAR_WIDTH = 300;

const SIDEBAR_BREAKPOINT = MIN_CONTENT_WIDTH + MIN_SIDEBAR_WIDTH;

export const Container = styled.nav`
    @media only screen and (max-width: ${SIDEBAR_BREAKPOINT}px) {
        display: none;
    }

    max-width: ${SIDEBAR_WIDTH}px;
    min-width: ${MIN_SIDEBAR_WIDTH}px;

    align-self: flex-start;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 96px;

    max-height: calc(100vh - 144px);
    overflow: auto;

    font-size: 15px;
    padding: 16px;

    h2 {
        margin: 0;
        padding-left: 8px;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

    li {
        padding: 8px 0;
    }

    li li:last-child {
        padding: 8px 0 0 0;
    }

    li li {
        margin-left: 16px;
    }
    li li:first-child {
        margin-top: 8px;
    }
`;

export const Bullet = styled.div`
    width: 8px;
    min-width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 2px solid: var(--text-color);
    background-color: var(--primary-color);
    margin: 8px;
`;

export const Item = styled.li`
    > div > a {
        color: var(--text-color);
    }

    > div > a:hover {
        color: var(--text-color-meta);
    }

    > div {
        display: flex;
        min-height: 28px;
        line-height: 28px;
    }
`;