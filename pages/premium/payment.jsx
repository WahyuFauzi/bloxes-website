import { QRCodeCanvas } from 'qrcode.react';
import Layout from '../../components/Layout';
export default function Payment() {
	const qrString =
		'0002010102##########CO.XENDIT.WWW011893600#######14220002152#####414220010303TTT####015CO.XENDIT.WWW02180000000000000000000TTT52  045######ID5911XenditQRIS6007Jakarta6105121606##########3k1mOnF73h11111111#3k1mOnF73h6v53033605401163040BDB';
	return (
		<Layout>
			<div className="w-screen h-screen flex justify-center mt-12">
				<QRCodeCanvas value={qrString} />
			</div>
		</Layout>
	);
}
