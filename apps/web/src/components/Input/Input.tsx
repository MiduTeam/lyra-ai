import { JellyTriangle } from '@uiball/loaders';
import clsx from 'clsx';
import { ChatBubbleCheck } from 'iconoir-react';

interface Props {
  input: string;
  setInput: (input: string) => void;
  fetchReview: () => void;
  loading: boolean;
  rate: number;
}
const PRODUCTS = [
  {
    id: 'B08H95Y452',
    img_url: 'https://m.media-amazon.com/images/I/61sFYqyj43L._AC_SX425_.jpg',
    url: 'https://www.amazon.es/Magic-Life-ergon%C3%B3mica-reposacabezas-reposabrazos/dp/B09FDQXPC7/ref=sr_1_14?keywords=Silla+oficina&qid=1675631711&sr=8-14',
  },
  {
    id: 'B08HG5Y452',
    img_url: 'https://m.media-amazon.com/images/I/61p+Bb3eeiS._AC_SX425_.jpg',
    url: 'https://www.amazon.es/Acer-Nitro-KG2-KG272S-ZeroFrame/dp/B093ZVJ1WR/ref=pd_ci_mcx_mh_mcx_views_0',
  },
  {
    id: 'B083453452',
    img_url:
      'https://m.media-amazon.com/images/I/71ny-4Njc4L._AC_SX679_PIbundle-6,TopRight,0,0_SH20_.jpg',
    url: 'https://www.amazon.es/D-F-L-LLC-Almohadillas-Autoadhesivas-Transparentes/dp/B07JY7SHTS?pd_rd_w=rROGD&content-id=amzn1.sym.3936b34d-eb82-485e-b4ba-c852db24bb98&pf_rd_p=3936b34d-eb82-485e-b4ba-c852db24bb98&pf_rd_r=GSGFP5BPJ6TDXS99M5Y1&pd_rd_wg=gxa2m&pd_rd_r=9ddb9e93-f72d-4989-9de4-d3407953a98b&pd_rd_i=B07JY7SHTS&psc=1&ref_=pd_bap_d_grid_rp_0_1_i',
  },
  {
    id: 'V083453452',
    img_url: 'https://m.media-amazon.com/images/I/71Hc1HtNCsL._AC_SX679_.jpg',
    url: 'https://www.amazon.es/FEBER-800009593-Tobog%C3%A1n-Famosa/dp/B00OQSXUIG/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2RUYG33THS15D&keywords=toboganes%2Bde%2Bplastico&qid=1675712248&sprefix=toboganes%2Bde%2Bplastico%2Caps%2C99&sr=8-1&th=1',
  },
];
export default function Input({
  input,
  setInput,
  fetchReview,
  loading,
  rate,
}: Props) {
  return (
    <div className="flex flex-col w-5/6 max-w-lg gap-5 p-10 -m-20 md:m-5 bg-white shadow-lg max-h-[50%]  rounded-xl">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Input your Amazon ES product URL"
        className="h-full p-3 border border-gray-300 rounded"
      />

      <button
        onClick={fetchReview}
        className={clsx(
          'flex items-center justify-center rounded bg-slate-800 p-3 font-medium text-white shadow',
          loading ? 'cursor-not-allowed' : 'cursor-pointer',
        )}
        disabled={loading || rate >= 10}
      >
        {rate >= 10 ? (
          'Limit Exceeded - Try again in 1 minute'
        ) : loading ? (
          <>
            <JellyTriangle size={20} speed={1.75} color="white" />
            <span className="ml-3">Loading...</span>
          </>
        ) : (
          <>
            <ChatBubbleCheck width={20} className="mr-2" />
            Analyze
          </>
        )}
      </button>
      <div className="flex w-full items-center space-x-2 justify-around">
        {PRODUCTS.map((product) => (
          <div
            onClick={() => setInput(product.url)}
            key={product.id}
            className={`flex items-center gap-3 p-3 border border-gray-300 rounded cursor-pointer hover:scale-110 transition-transform ${
              input === product.url ? 'border-gray-900' : ''
            }`}
          >
            <img
              src={product.img_url}
              alt="product"
              className="w-12 h-12 object-cover rounded"
            />
          </div>
        ))}
      </div>
      <p>Try one of theese examples!</p>
    </div>
  );
}
