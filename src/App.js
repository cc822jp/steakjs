import SmokeMachine from '@bijection/smoke'
import React from 'react';
import './App.css';

class App extends React.Component {
    componentDidMount() {
        // TODO: たぶんrefを使った方がいい
        const steak = document.getElementById('steak')
        this.canvas = document.getElementById('canvas')
        const ctx = this.canvas.getContext('2d')
        const steakRect = steak.getBoundingClientRect();
        this.canvas.width = steakRect.width;
        this.canvas.height = steakRect.height;
        this.party = SmokeMachine(ctx, [180,180,180])
        this.party.start();
        this.smoke();
        setTimeout(this.smoke.bind(this), Math.random() * (1000 - 500) + 500);
    }

    smoke() {
        const minX = this.canvas.width * 0.2;
        const maxX = this.canvas.width * 0.7;
        const x = Math.random() * (maxX - minX) + minX;

        const minY = this.canvas.width * 0.25;
        const maxY = this.canvas.width * 0.6;
        const y = Math.random() * (maxY - minY) + minY;

        this.party.addSmoke(x, y, 100, {
            minLifetime: 1000,
            maxLifetime: 10000,
            minScale: 0,
            maxScale: 0.2,
            minVy: -1.5 / 10,
            maxVy: -0.5 / 10
        });

        setTimeout(this.smoke.bind(this), Math.random() * (1000 - 500) + 500);
    }

    render() {
        return (
            <div className="App">
                <div id="steak" className="steak">
                    <canvas id="canvas"></canvas>
                </div>
            </div>
        );
    }
}

export default App;
