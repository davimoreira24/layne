import React, {Component} from  'react';
import {Text,View,ImageBackground} from 'react-native';
import bgImage from '../assets/images/bgt3.gif'
class SettingsScreen extends Component{
  
  componentDidMount(){
    setInterval(() => (
      this.setState(previousState =>(
        {isShowingText : !previousState.isShowingText}

      ))
    ),1000);
  }
  state = {isShowingText:true};
render(){
  if (!this.state.isShowingText){
    return null;
  }
  return(
<Text>{this.props.text}</Text>

  );
}
}
export default class Pisca extends Component{
    render(){
      let pic= {
        uri : "https://media1.tenor.com/images/fef20bda62d288814a89e5cecb16707a/tenor.gif?itemid=14252824"
      }
      return(
<ImageBackground source = {bgImage} style ={{flex:1,width:null,height:null,justifyContent:'center',alignItems:'center'}}>
         <View>
           <Text>{"Disseram que a distancia com o universo é intransponível"} </Text>
           <Text>{"Esses Cientistas nunca tiveram razão"}</Text>
           <Text>{"Porque nunca te conheceram"}</Text>
           <Text>{"Claro que iam mudar de opinião"}</Text>
           <Text>{"Sei que não mereço navegar por teu universo"}</Text>
           <Text>{"Você deve tá pensando o inverso"}</Text>
           <Text>{"Mas sabe o porque de você ser tão especial ?"}</Text>
           <Text>{"Porque você é unica meu amor"}</Text>
           <Text>{"e NADA NADA NADA no mundo pode brilhar mais do que você"}</Text>
           <Text>{"Você é tão incrível que consegue fazer meus dias valerem a pena com um sorriso"}</Text>
           <Text>{"Você é capaz de tudo meu anjo"}</Text>
           <Text>{"Eu sei que não sou o melhor menino do mundo"}</Text>
           <Text>{"Mas pode contar comigo pra tudo"}</Text>
           <Text>{"Me dá a mão e conta comigo"}</Text>
           <Text>{"E sabe de uma coisa ? "}</Text>
           <Text>{"Percebi que quando eu te chamo de 8 maravilha do mundo"}</Text>
           <Text>{"Eu to sendo muito leigo "}</Text>
           <Text>{"Já que as outras maravilhas parecem nada se comparadas a você"}</Text>
           <Text>{"Eu te amo pra sempre"}</Text>
         </View>
         </ImageBackground>
      )
    }
  }