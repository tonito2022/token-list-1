import { Connection, clusterApiUrl } from '@solana/web3.js';
import { ValidatedTokensData } from '../types/types';
import { findAddedTokens, newTokensHaveMatchingOnchainMeta } from './validate';
import { expect, test } from 'vitest'

const kiki: ValidatedTokensData = {
    Name: "JCLARA Token",
    Symbol: "JCL",
    Mint: "EKwnNoQ8ZQRqbnBkUms84qDTqKrsDRmnPzjn1JtNjups",
    Decimals: "9",
    LogoURI: "https://static-create.jup.ag/images/EKwnNoQ8ZQRqbnBkUms84qDTqKrsDRmnPzjn1JtNjups-6a07ea8d-6716-4bd1-aa51-b4988cc1e168.jpg",
    Line: 1085,
    "Community Validated": true,
}
