import React, {Component} from  'react';
import {Text,View,Image,} from 'react-native';
import {Video} from 'expo-av';
 class LinksScreen extends Component{
  
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
        uri : "https://media.wired.com/photos/5b8477b61419cf3acdceed27/master/pass/How%20Technology%20Is%20Changing%20the%20Way%20We%20Love.jpg"
      }
      return(
<View style ={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#03cffc"}}>
         <Video
  source={{ uri: 'https://r2---sn-jvoxju5cg-4vge.googlevideo.com/videoplayback?expire=1568411753&ei=CLx7XaKROovdhwaN67C4Cg&ip=207.66.113.208&id=o-ALD9KgFHXhmKOVdQb2f99mmoI1GyATt8HPLzQyRE-TlW&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=6926492&ratebypass=yes&dur=153.739&lmt=1557430905415284&fvip=2&c=WEB&txp=2211222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIgI5mIEfJF_cIRBwO4zT9BFt2SXA-yov00jVL0aJjacSMCIGDJq0KBwsfcwR4MyGzn4YYFDMk1zLL3S-KRCIKLnhpX&video_id=gzogWFiIXcQ&title=shiloh+dynasty+feat.+monty+datta+-+sing+to+you+%5Blegendado%5D&redirect_counter=1&rm=sn-p5qyk7l&req_id=eb273c021e5ea3ee&cms_redirect=yes&ipbypass=yes&mip=177.22.47.167&mm=31&mn=sn-jvoxju5cg-4vge&ms=au&mt=1568394712&mv=m&mvi=1&pl=24&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgZKQXX0_YURqvedHJIQsIviyMoqFW11nn_ee8Attcvd8CIQCY5NlHmqSVjwkmg2phXB577LBaNG4WQusl-_Lw4fY7hQ==' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ flex:1,minWidth: 350, height: 350 }}
/>
<Text>{" Oi neném ❤ "}</Text> 

         <Text>
           {"Queria passar pra lembrar o quanto eu te amo"}
         </Text>
         <Text style ={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:'rgba(0,0,0,0)'}}>{"Você é a pessoa mais linda , mais incrivel , mais maravilhosa que eu já conheci, você é definitivamente a melhor pessoa que eu já conheci "}</Text>
         <Text style ={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:'rgba(0,0,0,0)'}}>{"Eu nem sei explicar o quão incrivel você é , mas acho que posso usar a expressão (elayne) pra definir , sim eu sei que seu nome é com I mas acho legal com Y "}</Text>
         <Text style ={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:'rgba(0,0,0,0)'}}>{"Obrigado por ser o melhor universo , eu te amo demais demais demais demais"}</Text>
         <Text style ={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:'rgba(0,0,0,0)'}}>{"E se estiver triste ao ler isso , pensa em quem te ama , pensa nas coisas boas e você pode me chamar e a gente pode conversar , você é trilhosa demais pra ficar tristinha e me parte o coração te ver triste , e lembra sempre que vai ficar tudo bem , to sempre aqui contigo , SEMPRE "}</Text>
         <Image source = {pic} style ={{flex:1,minWidth:200,height:200}}></Image>
</View> 
      )
    }
  }
 