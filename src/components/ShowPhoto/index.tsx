import * as C from './styles';
import { MouseEvent } from 'react'

type Props = {
	url: string
	closePhoto: () => void;
}

export const ShowPhoto = ({url, closePhoto}: Props) => {

	return (
		<C.Container>
			<img src={url} />
			<div onClick={closePhoto} className='close'>✖</div>
		</C.Container>	
	);
}