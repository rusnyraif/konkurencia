window.RB_KONKURENCIA_DATA = {
  "products": {
    "loans": {
      "navLabel": "Pôžičky",
      "title": "Spotrebiteľské pôžičky",
      "hint": "Porovnanie poplatkov a základných parametrov bezúčelových pôžičiek medzi bankami.",
      "badge": "Rodina: Pôžičky",
      "disclaimer": "<b>Interná pomôcka pre pobočky.</b> Pri pôžičkách sledujeme poplatky v celom cykle úveru, orientačnú výšku úveru a zaujímavé odlišnosti bánk. Neoverené rozsahy úveru ostávajú explicitne označené.",
      "productLabel": "Variant",
      "searchPlaceholder": "napr. poskytnutie, splatenie, zostatok…",
      "supportsCustomRows": false,
      "defaultVariant": "standard",
      "bankIds": [
        "rb",
        "b365",
        "slsp",
        "vub",
        "unicredit",
        "prima",
        "postova",
        "mbank",
        "csob"
      ],
      "variants": [
        {
          "value": "standard",
          "label": "Štandardné porovnanie",
          "dataKey": "loans"
        }
      ],
      "features": [
        {
          "key": "fee_origination",
          "label": "Poplatok za poskytnutie pôžičky"
        },
        {
          "key": "fee_contract_change",
          "label": "Poplatok za zmenu zmluvných podmienok"
        },
        {
          "key": "fee_balance_statement",
          "label": "Vyčíslenie zostatku / potvrdenie"
        },
        {
          "key": "fee_early_repayment",
          "label": "Poplatok za predčasné splatenie"
        },
        {
          "key": "extra_payment",
          "label": "Mimoriadna splátka"
        },
        {
          "key": "cash_installment_payment",
          "label": "Úhrada splátky v hotovosti"
        },
        {
          "key": "loan_amount_range",
          "label": "Výška úveru"
        },
        {
          "key": "quirks",
          "label": "Pikošky / odlišnosti"
        }
      ],
      "infoKey": "loansBankInfo",
      "availabilityKey": "fee_origination"
    }
  },
  "standard": {
    "rb": {
      "monthly_fee": "5,50 €",
      "deposit_branch": "0 €",
      "withdraw_branch": "0 €",
      "transfer_branch": "0 €",
      "foreign_transfer_branch": "9,50 €",
      "replacement_card": "0 €",
      "replacement_pin": "0 €",
      "atm_other_bank": "1× v balíku zadarmo, ďalší výber 3,50 €",
      "atm_abroad": "V Európe z bankomatov RBI zadarmo, inak: 3,50 €",
      "so_dd_branch": "0 €",
      "so_dd_ib": "0 €",
      "notifications": "PUSH zadarmo alebo SMS: 1,50 € mesačne",
      "paper_statement": "1,50 €",
      "discount_50": "400 € kredit alebo 1 realizované inkaso",
      "discount_100": "400 € kredit a 1 realizované inkaso"
    },
    "slsp": {
      "monthly_fee": "7,00 € (27–61 r.)",
      "deposit_branch": "každý vklad na svoj účet 4,00 €",
      "withdraw_branch": "8,00 €",
      "transfer_branch": "8,00 €",
      "foreign_transfer_branch": "vrátane SEPA − 2 €, inak 15 €",
      "replacement_card": "10 €, urgentné vydanie: 50 €",
      "replacement_pin": "5,00 €",
      "atm_other_bank": "3,50 €",
      "atm_abroad": "Podľa typu bankomatu 0 až 6 €",
      "so_dd_branch": "založenie: 8 €; zmena: 8 €; zrušenie: 8 €",
      "so_dd_ib": "zmena/zrušenie: 0,00 €",
      "notifications": "PUSH zadarmo alebo SMS: 3,50 € mesačne",
      "paper_statement": "2,50 €",
      "discount_50": "50 % zľava zrušená (od 1.6.2020)",
      "discount_100": "(27–61 r.) 450 € platby PK a 3 pravidelné platby alebo nasporených 15 000 € alebo PK k podnikateľskému účtu 5×/mes."
    },
    "vub": {
      "monthly_fee": "7,00 €",
      "deposit_branch": "každý vklad na svoj účet 6,00 €",
      "withdraw_branch": "10,00 €",
      "transfer_branch": "10,00 €",
      "foreign_transfer_branch": "do 1700 € – 20 €; 1700–17000 € – 30 €; nad 17000 € – 40/50 €",
      "replacement_card": "15,00 €",
      "replacement_pin": "5,00 €",
      "atm_other_bank": "3,50 €",
      "atm_abroad": "4,00 €",
      "so_dd_branch": "zmena: 10 €; zrušenie: 10 €",
      "so_dd_ib": "zmena: 0,50 €; zrušenie: 0,50 €",
      "notifications": "PUSH zadarmo alebo SMS: 2,00 € mesačne",
      "paper_statement": "3,20 €",
      "discount_50": "Aktívne využívanie účtu (1×/mes. prihlásenie do IB a kredit min. 700 €) + aspoň 2 produkty",
      "discount_100": "Ako 50 %, ale aspoň 3 produkty"
    },
    "csob": {
      "monthly_fee": "6,00 €",
      "deposit_branch": "každý vklad na svoj účet 6,00 €",
      "withdraw_branch": "6,00 €",
      "transfer_branch": "12,00 €",
      "foreign_transfer_branch": "1 %, min. 30 € – max. 100 €",
      "replacement_card": "5,00 €",
      "replacement_pin": "0,00 €",
      "atm_other_bank": "1× výber z cudzieho bankomatu zdarma; ďalší 6,00 €",
      "atm_abroad": "6,00 €",
      "so_dd_branch": "Zrušené",
      "so_dd_ib": "0,00 €",
      "notifications": "PUSH zadarmo; každá SMS: 0,15 €",
      "paper_statement": "4,00 €",
      "discount_50": "Príjem min. 400 €; 3× pravidelné platby; 5× platba PK alebo depozitá/investície/úvery 20 000 € alebo podnikateľský účet",
      "discount_100": "Pri splnení dvoch 50 % podmienok"
    },
    "unicredit": {
      "monthly_fee": "4,90 € – nové účty",
      "deposit_branch": "každý vklad na svoj účet 6,00 €",
      "withdraw_branch": "8,00 €",
      "transfer_branch": "10,00 €",
      "foreign_transfer_branch": "0,5 % zo sumy, min. 12 € – max. 100 €",
      "replacement_card": "10 € (expresné vydanie karty 35 €)",
      "replacement_pin": "10,00 €",
      "atm_other_bank": "2× výber z cudzieho bankomatu zdarma, ďalší 3,00 €",
      "atm_abroad": "6,00 €",
      "so_dd_branch": "zadanie: 20 €; zmena: 10 €; zrušenie: 10 €",
      "so_dd_ib": "zmena: 10 €; zrušenie: 10 €",
      "notifications": "PUSH zadarmo alebo každá SMS: 0,20 €",
      "paper_statement": "5,00 €",
      "discount_50": "neexistuje",
      "discount_100": "neexistuje"
    },
    "mbank": {
      "monthly_fee": "0,00 €",
      "deposit_branch": "nedá sa uskutočniť ani v kontaktných centrách",
      "withdraw_branch": "V pobočkách bánk (Cash advance) – 1 %, min. 2 €",
      "transfer_branch": "nedá sa; cez mLink 2 €",
      "foreign_transfer_branch": "nedá sa uskutočniť ani v kontaktných centrách",
      "replacement_card": "8,00 €",
      "replacement_pin": "0 €",
      "atm_other_bank": "pri výbere ≥ 70 €: 0 €; do 69,99 €: 1,30 €",
      "atm_abroad": "pri výbere ≥ 70 €: 0 €; do 69,99 €: 1,30 €",
      "so_dd_branch": "zadanie/zmena/zrušenie cez mLinku: 2 €",
      "so_dd_ib": "0 €",
      "notifications": "PUSH zadarmo alebo balík 30 SMS – 2 €, každá ďalšia 0,20 €",
      "paper_statement": "2,00 €",
      "discount_50": "—",
      "discount_100": "Platby kartou aspoň 70 € mesačne alebo aktívna pôžička"
    },
    "prima": {
      "monthly_fee": "4,90 €",
      "deposit_branch": "každý vklad na svoj účet 5,00 €",
      "withdraw_branch": "5,00 €",
      "transfer_branch": "5,00 €",
      "foreign_transfer_branch": "do 2000 € – 20 €; nad 2000 € – 35 €",
      "replacement_card": "10,00 €",
      "replacement_pin": "3,50 €",
      "atm_other_bank": "3,00 €",
      "atm_abroad": "3,00 €",
      "so_dd_branch": "zmena: 5,00 €; zrušenie: 5,00 €",
      "so_dd_ib": "0,00 €",
      "notifications": "PUSH zadarmo alebo SMS: 2 € mesačne",
      "paper_statement": "2,50 €",
      "discount_50": "Odmena za platby kartou 0,25 %, mobilom 0,5 % – 50 % pri súčte platieb 490 €",
      "discount_100": "100 % pri súčte platieb 980 € alebo priemerný denný zostatok > 15 000 €"
    },
    "postova": {
      "monthly_fee": "5,90 €",
      "deposit_branch": "1× zadarmo, ďalší vklad 1,00 €",
      "withdraw_branch": "8,00 €",
      "transfer_branch": "Infolinka 10 €; pošta 8 € + 2 €; pobočka 10 €",
      "foreign_transfer_branch": "v SEPA – 2,25 €; mimo SEPA 1 %, min. 10 €, max. 45 €",
      "replacement_card": "10,00 €",
      "replacement_pin": "3,00 €",
      "atm_other_bank": "1× grátis, ďalší 5,00 €",
      "atm_abroad": "6,00 €",
      "so_dd_branch": "zmena cez Infolinku 10 €; na pošte 8 € + 2 €; v pobočke 10 €",
      "so_dd_ib": "0,00 €",
      "notifications": "PUSH zadarmo alebo SMS: 4 € mesačne",
      "paper_statement": "4 € mesačne",
      "discount_50": "neexistuje",
      "discount_100": "Pri priemerných denných zostatkoch na depozitných produktoch nad 20 000 €"
    },
    "b365free": {
      "monthly_fee": "0,00 €",
      "deposit_branch": "každý vklad na svoj účet poplatok 2 €",
      "withdraw_branch": "10,00 €",
      "transfer_branch": "10,00 €",
      "foreign_transfer_branch": "v SEPA: 8 €; mimo SEPA: 1 % min. 12 €",
      "replacement_card": "12,00 €",
      "replacement_pin": "nedá sa",
      "atm_other_bank": "4,00 €",
      "atm_abroad": "4,00 €",
      "so_dd_branch": "zadanie TP: 10 €; zmena: 10 €; zrušenie: 10 €",
      "so_dd_ib": "0,00 €",
      "notifications": "LEN PUSH, SMS neposielajú",
      "paper_statement": "len elektronický výpis",
      "discount_50": "neexistuje",
      "discount_100": "neexistuje"
    },
    "b365plus": {
      "monthly_fee": "5,90 €",
      "deposit_branch": "vklad 4×/mes. zadarmo, ďalší 2 €",
      "withdraw_branch": "10,00 €",
      "transfer_branch": "10,00 €",
      "foreign_transfer_branch": "v SEPA: 8 €; mimo SEPA: 1 % min. 12 €",
      "replacement_card": "20,00 €",
      "replacement_pin": "nedá sa",
      "atm_other_bank": "4× výber/mes. zadarmo, ďalší 4 €",
      "atm_abroad": "4× výber/mes. zadarmo, ďalší 4 €",
      "so_dd_branch": "zadanie TP: 10 €; zmena: 10 €; zrušenie: 10 €",
      "so_dd_ib": "0,00 €",
      "notifications": "LEN PUSH, SMS neposielajú",
      "paper_statement": "len elektronický výpis",
      "discount_50": "neexistuje",
      "discount_100": "neexistuje"
    }
  },
  "senior": {
    "rb": {
      "monthly_fee": "5,50 €",
      "deposit_branch": "0,00 €",
      "withdraw_branch": "0,00 €",
      "transfer_branch": "0,00 €",
      "foreign_transfer_branch": "9,50 €",
      "replacement_card": "0,00 €",
      "replacement_pin": "0,00 €",
      "atm_other_bank": "1× v balíku zadarmo, ďalší 3,50 €",
      "atm_abroad": "V Európe z bankomatov RBI zadarmo, inak 2,00 €",
      "so_dd_branch": "0,00 €",
      "so_dd_ib": "0,00 €",
      "notifications": "PUSH zadarmo alebo SMS: 1,50 € mesačne",
      "paper_statement": "1,50 €",
      "discount_50": "400 € kredit alebo 1 realizované inkaso",
      "discount_100": "400 € kredit a 1 realizované inkaso"
    },
    "slsp": {
      "monthly_fee": "SPOROžíro/Space 62+ – 3,50 €",
      "deposit_branch": "1×/mes. zadarmo, ďalší 3,00 €",
      "withdraw_branch": "6,00 €",
      "transfer_branch": "5,00 €",
      "foreign_transfer_branch": "do 2000 € – 20 €; nad 2000 € – 30 €",
      "replacement_card": "nemá kartu k účtu",
      "replacement_pin": "—",
      "atm_other_bank": "nemá kartu k účtu",
      "atm_abroad": "nemá kartu k účtu",
      "so_dd_branch": "zmena: 5,00 €; zrušenie: 5,00 €",
      "so_dd_ib": "zmena: 0,20 €; zrušenie: 0,20 €",
      "notifications": "PUSH zadarmo alebo SMS: 2,00 € mesačne",
      "paper_statement": "1,00 €",
      "discount_50": "0,00 €",
      "discount_100": "Ak klient využíva účet na účely obchodovania s CP"
    },
    "vub": {
      "monthly_fee": "Senior – 3,50 €",
      "deposit_branch": "1,50 €",
      "withdraw_branch": "5,00 €",
      "transfer_branch": "5,00 €",
      "foreign_transfer_branch": "do 1700 € – 20 €; 1700–17000 € – 30 €; nad 17000 € – 40/50 €",
      "replacement_card": "15,00 €",
      "replacement_pin": "5,00 €",
      "atm_other_bank": "VÚB: 0,30 €; iný bankomat: 3,00 €",
      "atm_abroad": "3,00 €",
      "so_dd_branch": "zmena: 5,00 €; zrušenie: 5,00 €",
      "so_dd_ib": "zmena: 0,00 €; zrušenie: 0,50 €; realizované TP/I: 0,22 €",
      "notifications": "0,15 € za každú SMS",
      "paper_statement": "poštovné 0,90 € + obálka ≈ 1,50 €",
      "discount_50": "0,00 €",
      "discount_100": "0,00 €"
    },
    "csob": {
      "monthly_fee": "—",
      "deposit_branch": "—",
      "withdraw_branch": "—",
      "transfer_branch": "—",
      "foreign_transfer_branch": "—",
      "replacement_card": "—",
      "replacement_pin": "—",
      "atm_other_bank": "—",
      "atm_abroad": "—",
      "so_dd_branch": "—",
      "so_dd_ib": "—",
      "notifications": "—",
      "paper_statement": "—",
      "discount_50": "—",
      "discount_100": "—"
    },
    "unicredit": {
      "monthly_fee": "—",
      "deposit_branch": "—",
      "withdraw_branch": "—",
      "transfer_branch": "—",
      "foreign_transfer_branch": "—",
      "replacement_card": "—",
      "replacement_pin": "—",
      "atm_other_bank": "—",
      "atm_abroad": "—",
      "so_dd_branch": "—",
      "so_dd_ib": "—",
      "notifications": "—",
      "paper_statement": "—",
      "discount_50": "—",
      "discount_100": "—"
    },
    "mbank": {
      "monthly_fee": "—",
      "deposit_branch": "—",
      "withdraw_branch": "—",
      "transfer_branch": "—",
      "foreign_transfer_branch": "—",
      "replacement_card": "—",
      "replacement_pin": "—",
      "atm_other_bank": "—",
      "atm_abroad": "—",
      "so_dd_branch": "—",
      "so_dd_ib": "—",
      "notifications": "—",
      "paper_statement": "—",
      "discount_50": "—",
      "discount_100": "—"
    },
    "prima": {
      "monthly_fee": "—",
      "deposit_branch": "—",
      "withdraw_branch": "—",
      "transfer_branch": "—",
      "foreign_transfer_branch": "—",
      "replacement_card": "—",
      "replacement_pin": "—",
      "atm_other_bank": "—",
      "atm_abroad": "—",
      "so_dd_branch": "—",
      "so_dd_ib": "—",
      "notifications": "—",
      "paper_statement": "—",
      "discount_50": "—",
      "discount_100": "—"
    },
    "postova": {
      "monthly_fee": "Užitočný účet Senior – 3,50 €",
      "deposit_branch": "0,50 €",
      "withdraw_branch": "5,00 €",
      "transfer_branch": "5,00 €",
      "foreign_transfer_branch": "0,5 %, min. 10 €, max. 45 €",
      "replacement_card": "0,00 €",
      "replacement_pin": "0,00 €",
      "atm_other_bank": "1× zdarma, ďalší 5,00 €",
      "atm_abroad": "6,00 €",
      "so_dd_branch": "zmena: 5,00 €",
      "so_dd_ib": "0,00 €",
      "notifications": "4,00 € mesačne",
      "paper_statement": "4,00 €",
      "discount_50": "0,00 €",
      "discount_100": "0,00 €"
    },
    "b365free": {
      "monthly_fee": "—",
      "deposit_branch": "—",
      "withdraw_branch": "—",
      "transfer_branch": "—",
      "foreign_transfer_branch": "—",
      "replacement_card": "—",
      "replacement_pin": "—",
      "atm_other_bank": "—",
      "atm_abroad": "—",
      "so_dd_branch": "—",
      "so_dd_ib": "—",
      "notifications": "—",
      "paper_statement": "—",
      "discount_50": "—",
      "discount_100": "—"
    },
    "b365plus": {
      "monthly_fee": "—",
      "deposit_branch": "—",
      "withdraw_branch": "—",
      "transfer_branch": "—",
      "foreign_transfer_branch": "—",
      "replacement_card": "—",
      "replacement_pin": "—",
      "atm_other_bank": "—",
      "atm_abroad": "—",
      "so_dd_branch": "—",
      "so_dd_ib": "—",
      "notifications": "—",
      "paper_statement": "—",
      "discount_50": "—",
      "discount_100": "—"
    }
  },
  "travel": {
    "vub": {
      "annual_premium": "35 eur",
      "medical_expenses": "250 000",
      "liability": "75 000 / 75 000",
      "dental_treatment": "350",
      "baggage_total_single": "500 / 250",
      "documents_loss": "----",
      "baggage_delay_flight": "240",
      "baggage_loss_flight": "500",
      "flight_delay_cancel": "240",
      "mountain_rescue_sr": "7 000",
      "trip_cancellation": "----",
      "vehicle_assistance": "----",
      "accident_death_disability": "50 000 / 50 000",
      "max_age_limit": "80 rokov"
    },
    "slsp": {
      "annual_premium": "60 eur",
      "medical_expenses": "150 000",
      "liability": "35 000 / 35 000",
      "dental_treatment": "500",
      "baggage_total_single": "1 000 / 350",
      "documents_loss": "350",
      "baggage_delay_flight": "300",
      "baggage_loss_flight": "1 000",
      "flight_delay_cancel": "----",
      "mountain_rescue_sr": "----",
      "trip_cancellation": "----",
      "vehicle_assistance": "200",
      "accident_death_disability": "10 000 / 10 000",
      "max_age_limit": "75 rokov"
    },
    "csob": {
      "annual_premium": "59 eur",
      "medical_expenses": "250 000",
      "liability": "50 000 / 35 000",
      "dental_treatment": "----",
      "baggage_total_single": "1 000 / 750",
      "documents_loss": "----",
      "baggage_delay_flight": "----",
      "baggage_loss_flight": "----",
      "flight_delay_cancel": "----",
      "mountain_rescue_sr": "10 000",
      "trip_cancellation": "----",
      "vehicle_assistance": "500",
      "accident_death_disability": "----",
      "max_age_limit": "bez limitu"
    },
    "tatrabanka": {
      "annual_premium": "55,20 eur",
      "medical_expenses": "250 000",
      "liability": "65 000 / 32 500",
      "dental_treatment": "500",
      "baggage_total_single": "3 000 / 1 000",
      "documents_loss": "500",
      "baggage_delay_flight": "300",
      "baggage_loss_flight": "1 000",
      "flight_delay_cancel": "300",
      "mountain_rescue_sr": "10 000",
      "trip_cancellation": "200",
      "vehicle_assistance": "300",
      "accident_death_disability": "20 000 / 40 000",
      "max_age_limit": "bez limitu"
    }
  },
  "customRows": {
    "monthly_fee": true,
    "deposit_branch": true,
    "withdraw_branch": true,
    "transfer_branch": true,
    "foreign_transfer_branch": true,
    "replacement_card": true,
    "replacement_pin": true,
    "atm_other_bank": true,
    "atm_abroad": true,
    "so_dd_branch": true,
    "so_dd_ib": true,
    "notifications": true,
    "paper_statement": true,
    "discount_50": true,
    "discount_100": true
  },
  "bankInfo": {
    "rb": {
      "zauj": [
        "RB stĺpec je sticky a zvýraznený."
      ],
      "kampane": []
    },
    "b365": {
      "zauj": [
        "Účet zadarmo od 365.bank.",
        "Účet plus za 5,90 € mesačne."
      ],
      "kampane": []
    },
    "slsp": {
      "zauj": [
        "Cenník má 27 strán",
        "Náhradná karta 50 € (~2 dni)"
      ],
      "kampane": [
        "Možnosť získať 30 až 2 000 € pri otvorení Space účtu a používaní platobnej karty, mobilu alebo hodiniek. Po splnení sa v aplikácii zobrazí koleso odmien a bonus môže byť pripísaný do 30 dní.",
        "Odmenu si klient môže zdvojnásobiť, ak si založí podielové fondy alebo ETF fondy a zrealizuje prevod.",
        "Možnosť mať účet na 3 roky bez poplatku a získať 100 € navyše: 30 € za prenos trvalých príkazov a inkás a 70 € za presmerovanie príjmu."
      ]
    },
    "vub": {
      "zauj": [
        "Kópia výpisu 20 €",
        "Zmena PIN 3,50 €",
        "Výber iný bankomat 3,50 €",
        "Rezerva po 3M"
      ],
      "kampane": [
        "Možnosť získať 150 € pri otvorení účtu na pobočke alebo online a presune účtu do VÚB banky.",
        "Podmienkou je založenie sporiaceho účtu, na ktorom musí byť minimálne 50 € aj v deň vyhodnotenia kampane.",
        "V druhom mesiaci od otvorenia musí klient zrealizovať platby aspoň vo výške 300 €."
      ]
    },
    "csob": {
      "zauj": [
        "Zmena disponenta 10 €",
        "Kópia výpisu 12 €",
        "SMS 0,15 €",
        "TP/Inkaso na pobočke 12 €",
        "Bez Senior účtu"
      ],
      "kampane": [
        "Možnosť získať až 250 € pri založení účtu v ČSOB banke.",
        "50 € za aktivovanie služby Smart Drobné v aplikácii ČSOB SmartBanking.",
        "100 € za platby kartou počas 4 mesiacov v minimálnej hodnote 250 € mesačne.",
        "50 € za nové pravidelné investovanie do fondu minimálne 30 € a ďalšiu investíciu aspoň 30 € počas kampane; zároveň počas dvoch mesiacov musí prísť na účet aspoň 200 €, prípadne 30 € na detský účet.",
        "50 € za presun účtu z inej banky."
      ]
    },
    "unicredit": {
      "zauj": [
        "Bez 50 % aj 100 % zľavy",
        "Sadzobník 37 strán",
        "Exekúcia +10 €/mes.",
        "Bez Senior účtu"
      ],
      "kampane": [
        "Odmena až 180 € za platby za energie ZSE alebo VSE.",
        "Mesačný bonus 7,50 € vyplácaný počas 24 mesiacov.",
        "Podmienkou sú pravidelné platby za energie a aktívne používanie karty."
      ]
    },
    "mbank": {
      "zauj": [
        "Bez vkladov na pobočke",
        "Silný mobilný kanál"
      ],
      "kampane": [
        "Stačí si založiť mKonto a v žiadosti do poľa „Prichádzam na základe akcie“ uviesť promo kód BONUS.",
        "Klient musí zaplatiť kartou alebo zariadením aspoň 3-krát za mesiac.",
        "Počas 5 mesiacov môže za každý mesiac so splnenými podmienkami získať 20 €."
      ]
    },
    "prima": {
      "zauj": [
        "Úver do 15 000 €",
        "Nad 6 000 € vstupuje manžel/ka",
        "Kalkulačka odmien"
      ],
      "kampane": [
        "Kampaň „Osobný účet - Zaplať mobilom a vyhraj 8 × 3 000 €“.",
        "Počas trvania kampane musí klient v každom kalendárnom mesiaci vykonať aspoň 15 platieb mobilným telefónom alebo hodinkami.",
        "Do kampane sa započítajú platby cez Apple Pay, Google Pay, Garmin Pay alebo Xiaomi Pay u obchodníkov na termináli aj na internete."
      ]
    },
    "postova": {
      "zauj": [
        "50 % nie; 100 % pri 20 000 €",
        "Bez povoleného prečerpania"
      ],
      "kampane": [
        "Klient má nárok na odmenu 30 €, ak si otvorí nový Užitočný účet alebo Užitočný účet Senior.",
        "Je potrebné presmerovať príjem alebo dôchodok.",
        "Do 90 dní musí na novootvorený účet prísť príjem minimálne 500 €.",
        "Po automatickom splnení podmienok vzniká nárok aj na 12 mesiacov účtu bez poplatku."
      ]
    },
    "b365free": {
      "zauj": [
        "Len e-výpis",
        "Bez disponenta",
        "Len PUSH (bez SMS)",
        "Bez Senior účtu"
      ],
      "kampane": [
        "Aktuálne bez kampane."
      ]
    },
    "b365plus": {
      "zauj": [
        "Len e-výpis",
        "Len PUSH",
        "Odblokovanie karty 6 €",
        "Bez Senior účtu"
      ],
      "kampane": [
        "Aktuálne bez kampane."
      ]
    }
  },
  "campaignsBankInfo": {
    "b365": {
      "zauj": [],
      "kampane": [
        "Chceš Účet zadarmo od 365? Nie je problém.",
        "Hľadáš niečo extra s parádnymi výhodami? Máme aj Účet plus za 5,90 € mesačne."
      ]
    }
  },
  "travelBankInfo": {
    "vub": {
      "zauj": [
        "Najnižšie ročné poistné v dodanom porovnaní.",
        "Silné liečebné náklady a zásah horskej služby, bez storna a asistencie k vozidlám."
      ],
      "kampane": []
    },
    "slsp": {
      "zauj": [
        "Vyššie ročné poistné oproti VÚB a Tatra banke.",
        "Obsahuje krytie straty dokladov aj technickú asistenciu k vozidlám."
      ],
      "kampane": [
        "Celoročné cestovné poistenie do celého sveta za nízky ročný poplatok."
      ]
    },
    "csob": {
      "zauj": [
        "Bez limitu veku v dodanom porovnaní.",
        "Silné krytie horskej služby a asistencie, slabšie doplnkové letové benefity."
      ],
      "kampane": []
    },
    "tatrabanka": {
      "zauj": [
        "Najširšie pokrytie batožiny v priloženom porovnaní.",
        "Bez vekového limitu a ako jediná má v zdroji vyznačené storno poplatky."
      ],
      "kampane": []
    }
  }
  ,"loans": {
    "rb": {
      "fee_origination": "0,00 €",
      "fee_contract_change": "0,00 €",
      "fee_balance_statement": "0,00 €",
      "fee_early_repayment": "0,00 €",
      "extra_payment": "0,00 €",
      "cash_installment_payment": "0,00 €",
      "loan_amount_range": "300 – 40 000 €",
      "quirks": "bez poplatkov v celom cykle úveru"
    },
    "b365": {
      "fee_origination": "2 % z objemu úveru",
      "fee_contract_change": "50,00 €",
      "fee_balance_statement": "20,00 €",
      "fee_early_repayment": "max. 1 % resp. 0,5 %",
      "extra_payment": "rovnaké ako predčasné splatenie",
      "cash_installment_payment": "10,00 €",
      "loan_amount_range": "300 – 40 000 €",
      "quirks": "štandardné zákonné limity"
    },
    "slsp": {
      "fee_origination": "2 % z výšky úveru (min. 20 €)",
      "fee_contract_change": "individuálne",
      "fee_balance_statement": "20,00 €",
      "fee_early_repayment": "max. 1 % resp. 0,5 %",
      "extra_payment": "rovnaké ako predčasné splatenie",
      "cash_installment_payment": "cca 8,00 €",
      "loan_amount_range": "až 40 000 €",
      "quirks": "balíky, poistenie"
    },
    "vub": {
      "fee_origination": "4 % z objemu úveru",
      "fee_contract_change": "70,00 €",
      "fee_balance_statement": "50,00 €",
      "fee_early_repayment": "max. 1 % resp. 0,5 %",
      "extra_payment": "max. 1 % resp. 0,5 %, bez poplatku do 10 000 €/rok",
      "cash_installment_payment": "5,00 €",
      "loan_amount_range": "až 40 000 €",
      "quirks": "najvyšší vstupný poplatok na trhu"
    },
    "unicredit": {
      "fee_origination": "50,00 €",
      "fee_contract_change": "35,00 €",
      "fee_balance_statement": "0,00 €",
      "fee_early_repayment": "max. 1 % resp. 0,5 %",
      "extra_payment": "rovnaké ako predčasné splatenie",
      "cash_installment_payment": "2,00 €",
      "loan_amount_range": "650 – 60 000 €",
      "quirks": "fixný poplatok namiesto %"
    },
    "prima": {
      "fee_origination": "5 % z objemu úveru",
      "fee_contract_change": "15,00 €",
      "fee_balance_statement": "15 – 30 €",
      "fee_early_repayment": "max. 1 % resp. 0,5 %",
      "extra_payment": "bez poplatku do limitu",
      "cash_installment_payment": "6,00 €",
      "loan_amount_range": "do 15 000 €",
      "quirks": "najvyšší poplatok za poskytnutie (5 %)"
    },
    "postova": {
      "fee_origination": "2 % z objemu úveru",
      "fee_contract_change": "50,00 €",
      "fee_balance_statement": "20,00 €",
      "fee_early_repayment": "max. 1 % resp. 0,5 %",
      "extra_payment": "rovnaké ako predčasné splatenie",
      "cash_installment_payment": "8 – 10 €",
      "loan_amount_range": "300 – 40 000 €",
      "quirks": "campaign 0 % pôžičky"
    },
    "mbank": {
      "fee_origination": "0,00 €",
      "fee_contract_change": "20,00 €",
      "fee_balance_statement": "11,50 €",
      "fee_early_repayment": "0,00 € (limit), inak max. 1 %",
      "extra_payment": "zadarmo do limitu",
      "cash_installment_payment": "nízke / často zdarma",
      "loan_amount_range": "až 48 000 €",
      "quirks": "bez poplatku za poskytnutie aj splatenie"
    },
    "csob": {
      "fee_origination": "50,00 €",
      "fee_contract_change": "0,00 €",
      "fee_balance_statement": "0,00 €",
      "fee_early_repayment": "max. 1 % resp. 0,5 %, bezplatne do 10 000 €/rok",
      "extra_payment": "bez poplatku do limitu",
      "cash_installment_payment": "10,00 €",
      "loan_amount_range": "neuvedené / neoverené",
      "quirks": "bez poplatkov za potvrdenia a zmeny"
    }
  },
  "loansBankInfo": {
    "rb": {
      "zauj": [
        "Bez poplatku za poskytnutie, zmeny aj predčasné splatenie podľa dodaného porovnania.",
        "Rozsah úveru 300 – 40 000 € je potvrdený z oficiálnej stránky Parádna pôžička."
      ],
      "kampane": []
    },
    "b365": {
      "zauj": [
        "Rozsah 300 – 40 000 € potvrdený z verejnej stránky 365.bank.",
        "Štandardný model poplatkov vrátane 2 % za poskytnutie."
      ],
      "kampane": []
    },
    "slsp": {
      "zauj": [
        "Rozsah až 40 000 € potvrdený z oficiálnej stránky Pôžička na čokoľvek."
      ],
      "kampane": [
        "Pôžička na čokoľvek teraz s úrokom od 4,99 % ročne.",
        "50 % zľava z poplatku za poskytnutie úveru."
      ]
    },
    "vub": {
      "zauj": [
        "Rozsah až 40 000 € potvrdený z verejnej stránky VÚB.",
        "Najvyšší vstupný poplatok v dodanom porovnaní."
      ],
      "kampane": [
        "Zelená pôžička pre eko - technológie.",
        "100 % zľava z poplatku za poskytnutie úveru len do 30.6.2026.",
        "od 5,90 % p.a"
      ]
    },
    "unicredit": {
      "zauj": [
        "Používa fixný poplatok za poskytnutie namiesto percenta.",
        "Na oficiálnej stránke PRESTO Úver - nové peniaze je v kalkulačke rozsah od 650 € do 60 000 €.",
        "Ide o bezúčelovú spotrebiteľskú pôžičku, nie o produkt na bývanie."
      ],
      "kampane": []
    },
    "prima": {
      "zauj": [
        "Najvyšší poplatok za poskytnutie v dodanom porovnaní: 5 %.",
        "Rozsah do 15 000 € potvrdený z oficiálnej stránky Prima banky."
      ],
      "kampane": []
    },
    "postova": {
      "zauj": [
        "Na oficiálnej stránke Dobrá pôžička je uvedený rozsah od 300 eur do 40 000 eur."
      ],
      "kampane": [
        "Úrok už od 5,9 % ročne nielen na refinancovanie.",
        "Prenesením úverov k nám môžete ušetriť mesačne aj desiatky eur."
      ]
    },
    "mbank": {
      "zauj": [
        "Rozsah až 48 000 € potvrdený z verejnej stránky mBank.",
        "Bez poplatku za poskytnutie aj splatenie v dodanom porovnaní."
      ],
      "kampane": []
    },
    "csob": {
      "zauj": [
        "Silná stránka sú nulové poplatky za potvrdenia a zmeny v dodaných dátach.",
        "Rozsah úveru sa zatiaľ nepodarilo spoľahlivo potvrdiť z verejnej stránky."
      ],
      "kampane": []
    }
  }
};