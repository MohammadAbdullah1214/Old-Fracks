import { PublicKey } from "@solana/web3.js";

// ─── Network ────────────────────────────────────────────────────────────────

export const SOLANA_NETWORK =
  process.env.NEXT_PUBLIC_SOLANA_NETWORK?.trim() ?? "devnet";
export const RPC_URLS = [
  process.env.NEXT_PUBLIC_SOLANA_RPC_URL1,
  process.env.NEXT_PUBLIC_SOLANA_RPC_URL2,
  process.env.NEXT_PUBLIC_SOLANA_RPC_URL,
  process.env.NEXT_PUBLIC_RPC_URL,
  "https://api.devnet.solana.com",
]
  .map((url) => url?.trim())
  .filter((url): url is string => Boolean(url))
  .filter((url, index, list) => list.indexOf(url) === index);
export const RPC_URL = RPC_URLS[0];
export const EXPLORER_URL =
  process.env.NEXT_PUBLIC_EXPLORER_URL ?? "https://explorer.solana.com";
export const EXPLORER_CLUSTER =
  process.env.NEXT_PUBLIC_EXPLORER_CLUSTER?.trim() ?? SOLANA_NETWORK;
export const PUBLIC_TOKEN_MINTS = (
  process.env.NEXT_PUBLIC_TOKEN_MINTS ?? ""
)
  .split(",")
  .map((mint) => mint.trim())
  .filter(Boolean);
export const PUBLIC_TOKEN_HOLDER_INDEX = (
  process.env.NEXT_PUBLIC_TOKEN_HOLDER_INDEX ?? ""
)
  .split(",")
  .map((entry) => entry.trim())
  .filter(Boolean)
  .map((entry) => {
    const [mint, wallet] = entry.split(":").map((part) => part.trim());
    return { mint, wallet };
  })
  .filter((entry) => Boolean(entry.mint && entry.wallet));

// ─── Core Program IDs ────────────────────────────────────────────────────────

export const TOKEN_2022_PROGRAM_ID = new PublicKey(
  process.env.NEXT_PUBLIC_TOKEN_2022_PROGRAM_ID ??
    "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
);
export const FACTORY_PROGRAM_ID = new PublicKey(
  process.env.NEXT_PUBLIC_FACTORY_PROGRAM_ID ?? "2gBSmf6bnGq5ZXHhHo6tdj21fKE9rzrYWaFeJV9NxrR5"
);
export const TOKEN_PROGRAM_ID = new PublicKey(
  process.env.NEXT_PUBLIC_TOKEN_PROGRAM_ID ?? "C3xxp8iqqZasX7rgrJHfCUULSQFLGdB5QdgDfBjRqCcx"
);
export const TOKEN_HOOK_PROGRAM_ID = new PublicKey(
  process.env.NEXT_PUBLIC_TOKEN_HOOK_PROGRAM_ID ?? "87h25q5Z6PjMEkL9gwkxu2E7TBuEbVdvEMEYr7CGbP5u"
);
export const COMPLIANCE_PROGRAM_ID = new PublicKey(
  process.env.NEXT_PUBLIC_COMPLIANCE_PROGRAM_ID ?? "i7oNP2YnbgKHPMojxKb9XSPg9iKFXLfCRbjLJkJZFPB"
);
export const IRP_PROGRAM_ID = new PublicKey(
  process.env.NEXT_PUBLIC_IRP_PROGRAM_ID ?? "GKGmC9g1cEp1uUNgx2josYHbYzBk9yHuzA4Le3i1oNrh"
);
export const IRS_PROGRAM_ID = new PublicKey(
  process.env.NEXT_PUBLIC_IRS_PROGRAM_ID ?? "4upzjnTmKEjgDCWTvpfZ1rQ5iphLMDth3BivRKoF6pFZ"
);
export const FID_PROGRAM_ID = new PublicKey(
  process.env.NEXT_PUBLIC_FID_PROGRAM_ID ?? "EKwRHxKnE4sTsDjK4ExJsmtxi4WEvheRWteZTewJmh2L"
);
export const TIR_PROGRAM_ID = new PublicKey(
  process.env.NEXT_PUBLIC_TIR_PROGRAM_ID ?? "Q3NDBxHotwcaNZMix5UJt2aa7fhCQoucMqGnvBKne6j"
);
export const CTR_PROGRAM_ID = new PublicKey(
  process.env.NEXT_PUBLIC_CTR_PROGRAM_ID ?? "QhFoZ7PLJGjetbWrVo896zkcLFmgi4gWirhqZj4Yiep"
);

// ─── Governance / Deployment PDAs ────────────────────────────────────────────

export const GOVERNANCE_MULTISIG = new PublicKey(
  process.env.NEXT_PUBLIC_GOVERNANCE_MULTISIG ??
    "8jLbfuXMGrzS9zzMnwwdfaJrDXyHWeBTvtnaJgaFedmm"
);
export const VAULT_PDA = new PublicKey(
  process.env.NEXT_PUBLIC_VAULT_PDA ??
    "CftzQNMAZhuf3KBw8eR5DtPfaRLdakcBxqRt9paAJe9z"
);
export const FRONTEND_DEPLOYMENT_PDA = new PublicKey(
  process.env.NEXT_PUBLIC_FRONTEND_DEPLOYMENT_PDA ??
    "HTfp61aqvFfM8rXaCRVnC4vcsDqVEtp1yqHDeNSNszEx"
);

// ─── Compliance Module Program IDs ───────────────────────────────────────────

export const MOD_MAX_INVESTORS = new PublicKey(
  process.env.NEXT_PUBLIC_MOD_MAX_INVESTORS ??
    "9HwS3VGkNWDWvdF9hzy6AnsNkQZ3kn2K8ssUmgGoffVq"
);
export const MOD_COUNTRY_RESTRICT = new PublicKey(
  process.env.NEXT_PUBLIC_MOD_COUNTRY_RESTRICT ??
    "GiFKARG9JRwKJfxLVEKM4Ax71AKMaTTPiJ4fG3inCwkP"
);
export const MOD_MAX_BALANCE = new PublicKey(
  process.env.NEXT_PUBLIC_MOD_MAX_BALANCE ??
    "VVJZG5guG4Qho4U97wC5TjAJpbQtwNqUf7se2NiTJy7"
);
export const MOD_MAX_TRANSFER = new PublicKey(
  process.env.NEXT_PUBLIC_MOD_MAX_TRANSFER ??
    "HBKNkLXCNDjGmdVNf5Yvspe6jcWxCQ8bEKjVniFuvykz"
);
export const MOD_LOCKUP = new PublicKey(
  process.env.NEXT_PUBLIC_MOD_LOCKUP ??
    "3x4rMAgfGVJ9g5AsjYXmm1tiFGmHduT3UkxVkNmFtRRT"
);
export const MOD_DAILY_LIMIT = new PublicKey(
  process.env.NEXT_PUBLIC_MOD_DAILY_LIMIT ??
    "9yGSD9dAJUXjsvdUN2uyHy3Kfj2nCjxEhppYLgjFf6Xd"
);
export const MOD_SUPPLY_CAP = new PublicKey(
  process.env.NEXT_PUBLIC_MOD_SUPPLY_CAP ??
    "6c4HgfnPaqnKPjc87xGMapvjj2PNVPbmAuceUPnsRmpH"
);
export const MOD_COUNTRY_CAP = new PublicKey(
  process.env.NEXT_PUBLIC_MOD_COUNTRY_CAP ??
    "Fb93EdDho5pfeuSYu8RezfDGguNfYngB8aFtgDbgLLj3"
);

// ─── PDA Seed Constants ───────────────────────────────────────────────────────

export const SEED_TOKEN_STATE = Buffer.from("token_state");
export const SEED_OWNER = Buffer.from("owner");
export const SEED_AGENT = Buffer.from("agent");
export const SEED_COMPLIANCE_STATE = Buffer.from("compliance_state");
export const SEED_FACTORY_STATE = Buffer.from("factory_state");
export const SEED_DEPLOYMENT = Buffer.from("deployment");
export const SEED_IRP_STATE = Buffer.from("irp_state");
export const SEED_IRS_STATE = Buffer.from("irs_state");
export const SEED_TIR_STATE = Buffer.from("tir_state");
export const SEED_CTR_STATE = Buffer.from("ctr_state");
export const SEED_WALLET_IDENTITY = Buffer.from("wallet_identity");
export const SEED_FID = Buffer.from("fid");
export const SEED_CLAIM = Buffer.from("claim");
export const SEED_ISSUER_ENTRY = Buffer.from("issuer_entry");
export const SEED_TRANSFER_APPROVAL = Buffer.from("transfer_approval");
export const SEED_EXTRA_ACCOUNT_METAS = Buffer.from("extra-account-metas");
export const SEED_FROZEN_WALLET = Buffer.from("frozen_wallet");
export const SEED_PARTIAL_FREEZE = Buffer.from("partial_freeze");
export const SEED_DAILY_USAGE = Buffer.from("daily_usage");
export const SEED_COUNTRY_COUNT = Buffer.from("country_count");

// ─── Compliance Modules Registry ─────────────────────────────────────────────

export interface ComplianceModuleDefinition {
  id: string;
  name: string;
  programId: PublicKey;
  description: string;
  fields: ComplianceModuleField[];
}

export interface ComplianceModuleField {
  key: string;
  label: string;
  type: "number" | "bigint" | "timestamp" | "countries" | "country_caps";
  required: boolean;
  description: string;
}

export const COMPLIANCE_MODULES: ComplianceModuleDefinition[] = [
  {
    id: "max_investors",
    name: "Max Investors",
    programId: MOD_MAX_INVESTORS,
    description: "Limits the maximum number of unique token holders.",
    fields: [
      {
        key: "max_investors",
        label: "Maximum Investors",
        type: "number",
        required: true,
        description: "Maximum number of unique token holders allowed.",
      },
    ],
  },
  {
    id: "country_restrict",
    name: "Country Allowed",
    programId: MOD_COUNTRY_RESTRICT,
    description: "Allows transfers and minting only for the configured countries.",
    fields: [
      {
        key: "allowed_countries",
        label: "Allowed Countries",
        type: "countries",
        required: true,
        description: "Select the countries whose investors may receive this token.",
      },
    ],
  },
  {
    id: "max_balance",
    name: "Max Balance",
    programId: MOD_MAX_BALANCE,
    description:
      "Prevents any single wallet from holding more than the configured balance.",
    fields: [
      {
        key: "max_balance",
        label: "Maximum Balance",
        type: "bigint",
        required: true,
        description: "Maximum token balance a wallet may hold.",
      },
    ],
  },
  {
    id: "max_transfer",
    name: "Max Transfer",
    programId: MOD_MAX_TRANSFER,
    description: "Caps the size of a single transfer.",
    fields: [
      {
        key: "max_amount",
        label: "Maximum Transfer Amount",
        type: "bigint",
        required: true,
        description:
          "Maximum amount that may be transferred in a single transaction.",
      },
    ],
  },
  {
    id: "lockup",
    name: "Lockup",
    programId: MOD_LOCKUP,
    description: "Prevents all transfers until the lockup period expires.",
    fields: [
      {
        key: "lockup_end",
        label: "Lockup End (Unix timestamp)",
        type: "timestamp",
        required: true,
        description: "Unix timestamp after which transfers are permitted.",
      },
    ],
  },
  {
    id: "daily_limit",
    name: "Daily Transfer Limit",
    programId: MOD_DAILY_LIMIT,
    description: "Restricts the total volume a wallet can transfer per day.",
    fields: [
      {
        key: "daily_limit",
        label: "Daily Limit",
        type: "bigint",
        required: true,
        description:
          "Maximum cumulative transfer volume per wallet per 24-hour window.",
      },
    ],
  },
  {
    id: "supply_cap",
    name: "Supply Cap",
    programId: MOD_SUPPLY_CAP,
    description: "Enforces an absolute cap on the total token supply.",
    fields: [
      {
        key: "max_supply",
        label: "Maximum Supply",
        type: "bigint",
        required: true,
        description: "Hard cap on the total token supply.",
      },
    ],
  },
  {
    id: "country_cap",
    name: "Country Investor Cap",
    programId: MOD_COUNTRY_CAP,
    description:
      "Limits the number of investors from any individual country.",
    fields: [
      {
        key: "country_caps",
        label: "Country Caps",
        type: "country_caps",
        required: true,
        description:
          "Select each country and set the maximum number of investors allowed from it.",
      },
    ],
  },
];

// ─── Explorer Helpers ─────────────────────────────────────────────────────────

export function getExplorerTxUrl(signature: string): string {
  return `${EXPLORER_URL}/tx/${signature}?cluster=${EXPLORER_CLUSTER}`;
}

export function getExplorerAccountUrl(address: string | PublicKey): string {
  const addr =
    typeof address === "string" ? address : address.toBase58();
  return `${EXPLORER_URL}/address/${addr}?cluster=${EXPLORER_CLUSTER}`;
}
