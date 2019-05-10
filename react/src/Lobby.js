import React, { Component } from 'react';
import './css/App.css';
import { socket } from "./index.js"

/**
 * Models the tag representing a player. Expects a String name prop, and a change handler.
 */
class Lobby extends Component {

    constructor(props) {
        super(props);
        this.state = {
            creator: this.props.creator,
            names: [this.props.creator.name]
        }
    }


    componentDidMount() {

        socket.addEventListener("message", (message) => {
            const parsed = JSON.parse(message.data);
            switch (parsed.type) {
                case "NEW_PLAYER":
                    console.log("new player");
                    console.log(parsed.name);
                    break;
                case "REMOVE_PLAYER":
                    console.log("remove player");
                    break;
                case "LOBBY_DELETED":
                    console.log("delete lobby");
                    break;
                case "LOBBY_CREATED":
                    console.log("lobby created");
                    console.log(parsed.id);
                    this.setState({lobbyID: parsed.id});
                    break;
                case "LOBBY_JOINED":
                    console.log("lobby joined");
                    break;
                default:
                    console.log("message type not recognized");
            }

            // socket.send(JSON.stringify("message recieved"));
        });
    }

    render() {
        return ( <div className={"Lobby"}>
                <form className={"lobby-join-form"} onSubmit={this.onJoinSubmit}>
                    <input className={"lobby-input"} type={"text"} placeholder={"Enter game code"} autoComplete={"off"}/>
                    <input className={"lobby-input"} type={"text"} placeholder={"Enter name"} autoComplete={"off"}/>
                    <input className={"lobby-submit"} type={"submit"} value={"Join Game"}/>
                </form>

                <form className={"lobby-create-form"} onSubmit={this.onLobbyCreateSubmit}>
                    <input className={"lobby-input"} type={"text"} placeholder={"Enter name"} autoComplete={"off"}/>
                    <input className={"lobby-submit"} type={"submit"} value={"Create New Game"}/>
                </form>

            </div>

        );
    }
}

export default Lobby;