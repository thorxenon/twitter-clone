import { faRetweet, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

interface Props {
    retweetCount: number;
    onClose: () => void;
}

export const TweetRetweetModalDialog = ({ retweetCount, onClose }: Props) => {
    return(
        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50" onClick={onClose}>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-zinc-950 shadow-lg shadow-zinc-800 rounded-2xl p-2 w-80 flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl font-bold p-4">Retweetar</h2>
                <button className="w-full text-left py-3 px-4 rounded-md hover:bg-zinc-900 transition-colors duration-200 flex items-center gap-3">
                    <FontAwesomeIcon icon={faRetweet} className="size-5" />
                    <span className="font-bold">Retweetar</span>
                </button>
                <button className="w-full text-left py-3 px-4 rounded-md hover:bg-zinc-900 transition-colors duration-200 flex items-center gap-3" onClick={onClose}>
                    <FontAwesomeIcon icon={faPenToSquare} className="size-5" />
                    <span className="font-bold">Citar</span>
                </button>
            </motion.div>
        </div>
    )
}