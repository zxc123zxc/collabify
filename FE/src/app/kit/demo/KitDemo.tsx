import * as React from 'react';
import { ButtonDemo } from 'kit/button/demo/ButtonDemo';
import { TypoDemo } from 'kit/typo/demo/TypoDemo';
import "./kit_demo.scss";

export class KitDemo extends React.Component {
    render(): JSX.Element {
        // TODO: Put your component-demos here
        return <div>
            <TypoDemo />
            <ButtonDemo />
        </div>
    }
}