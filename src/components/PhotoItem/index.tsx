import * as C from './styles';

type Props = {
	url: string;
	name: string;
	key: number;
	click: () => void;
}

export const PhotoItem = ({ url, name, click}: Props) => {

	return (
		<C.Container onClick={click}>
			<img src={url} alt={name}/>
			<div className='name'>{name}</div>	
		</C.Container>
	)
}