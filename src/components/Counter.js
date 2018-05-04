import React from 'react';
import Button from './Button';
import './styles.less';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0
        };
    }
    handleClick(id) {
        let { score } = this.state;

        if (score === 0 && id === 'dec') return;

        if (id === 'dec')  {
            score--;
        } else {
            score++;
        }
        this.setState({ score });
    }
    renderImages() {
        const { score } = this.state;
        const imgList = [];

        if (score) {
            for (let i = 0; i < score; i++) {
                imgList.push(
                    <img key={i} src="img/vtb.png" alt={i} />
                );
            }

            return imgList;
        }

        return 'Images List is Empty';
    }
    render() {
        return(
            <div className='container'>
                <div className="row">
                    <Button
                        onClick={this.handleClick.bind(this)}
                        id='dec'
                    />
                    <div className="score">{this.state.score}</div>
                    <Button
                        onClick={this.handleClick.bind(this)}
                        id='inc'
                    />
                </div>
                { this.renderImages() }
            </div>
        );
    }
}

export default Counter;
